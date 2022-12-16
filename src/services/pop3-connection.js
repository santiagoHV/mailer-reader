import POP3Client from "poplib"
import * as fs from 'fs';

export default {
    all: () => {

        var host = "redesmails.com";
        var port = 110;
        var username = "cliente1";
        var password = "123";
        var totalmsgcount = 0;
        var currentmsg = 0;

        var fd = fs.openSync("Holi.txt", "a+");

        var client = new POP3Client(110, "redesmails.com", {
            tlserrs: false,
            enabletls: false,
            debug: false
        });

        client.on("error", function(err) {

            if (err.errno === 111) console.log("Unable to connect to server, failed");
            else console.log("Server error occurred, failed");

            console.log(err);

        });

        client.on("connect", function() {

            console.log("CONNECT success");
            client.login(username, password);

        });

        client.on("invalid-state", function(cmd) {
            console.log("Invalid state. You tried calling " + cmd);
        });

        client.on("locked", function(cmd) {
            console.log("Current command has not finished yet. You tried calling " + cmd);
        });

        client.on("login", function(status, rawdata) {

            if (status) {

                console.log("LOGIN/PASS success");
                client.list();

            } else {

                console.log("LOGIN/PASS failed");
                client.quit();

            }
        });

        client.on("list", function(status, msgcount, msgnumber, data, rawdata) {

            if (status === false) {

                console.log("LIST failed");
                client.quit();

            } else if (msgcount > 0) {

                totalmsgcount = msgcount;
                currentmsg = 1;
                console.log("LIST success with " + msgcount + " message(s)");
                client.retr(1);

            } else {

                console.log("LIST success with 0 message(s)");
                client.quit();

            }
        });

        client.on("retr", function(status, msgnumber, data, rawdata) {

            if (status === true) {

                console.log("RETR success " + msgnumber);
                currentmsg += 1;

                fs.write(fd, new Buffer(data + "\r\n\r\n"), 0, data.length + 4, null, function(err, written, buffer) {

                    if (err) client.rset();
                    else client.dele(msgnumber);

                });

            } else {

                console.log("RETR failed for msgnumber " + msgnumber);
                client.rset();

            }
        });

        client.on("dele", function(status, msgnumber, data, rawdata) {

            if (status === true) {

                console.log("DELE success for msgnumber " + msgnumber);

                if (currentmsg > totalmsgcount)
                    client.quit();
                else
                    client.retr(currentmsg);

            } else {

                console.log("DELE failed for msgnumber " + msgnumber);
                client.rset();

            }
        });

        client.on("rset", function(status, rawdata) {
            client.quit();
        });

        client.on("quit", function(status, rawdata) {

            if (status === true) console.log("QUIT success");
            else console.log("QUIT failed");

        });
    }
}