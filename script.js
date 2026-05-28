const messages = [

    "I warned you.",
    "Initializing hosting sequence...",
    "Connecting to remote server...",
    "Access granted.",
    "Downloading unnecessary stress...",
    "Error 404: Motivation not found.",
    "Scanning academic trauma...",
    "Congratulations. You survived assignments that nobody will remember.",
    "Your code compiles. Your life doesn’t.",
    "Rebuilding confidence...",
    "FAILED.",
    "Your GPA is temporary.",
    "Detecting sleep deprivation...",
    "You’re not procrastinating. You’re just prioritizing panic.",
    "Contacting placement cell...",
    "No response.",
    "Placed? No. Traumatized? Yes.",
    "Decrypting semester memories...",
    "Midnight submissions detected.",
    "Fear levels critical.",
    "Your degree is a piece of paper. Your stress is real.",

    ".../...",
    "...|...",
    "...\\...",
    "...--...",

    "WARNING: Reality.exe has stopped responding.",
    "Injecting last-minute bug fixes...",
    "Hacking server connection...",
    "Bypassing college WiFi restrictions...",
    "Uploading dreams.zip...",
    "Compressing tears.rar...",
    "Starting web services...",
    "Finalizing deployment...",

    "System stabilized.",
    "Hope restored.",
    "Hosting successful. 🚀"

];

// CLICK ME BUTTON
$(document).ready(() => {

    $("#showMessage").click(() => {

        $("#msg").hide();

        $("#message")
            .hide()
            .html(`
                <div class="success-card">
                    <h2>🚀 Website Successfully Hosted</h2>

                    <p>
                        Your website is now live on the server.
                    </p>

                    <span>
                        Deployment completed successfully.
                    </span>
                </div>
            `)
            .fadeIn(1000);

    });

});

// DON'T CLICK BUTTON
function showMessage() {

    $("button").prop("disabled", true);

    let i = 0;

    $("#message").html("");
    $("#msg").show().text(messages[i]);

    const interval = setInterval(() => {

        i++;

        if (i < messages.length) {

            $("#msg")
                .fadeOut(150, function () {
                    $(this)
                        .text(messages[i])
                        .fadeIn(300);
                });

        } else {

            clearInterval(interval);

            $("#message").html(`
                <div class="success-card">
                    <h2>✅ Hosting Successful</h2>

                    <p>
                        Your webpage is now live and accessible.
                    </p>

                    <span>
                        Server deployment completed.
                    </span>
                </div>
            `);

        }

    }, 2000);
}
