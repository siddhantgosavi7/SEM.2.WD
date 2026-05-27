$(document).ready(function () {

    $("#showMessage").click(function () {

        $("#message").hide();

        $("#message")
            .html("Website is successfully hosted!")
            .fadeIn(1000);

    });

});
const messages = [  "Congratulations. You survived assignments that nobody will remember.",
                    "Your GPA is temporary.",
                    "“All this struggle… just to say ‘good morning sir’ in interviews.",
                    "You came for education. You got PDFs.",
                    "Achievement unlocked: Deadline Survivor.",
                    "Your attendance increased. Happiness decreased.",
                    "Behind every engineer is FINAL_FINAL_v2_REAL.",
                    "Placed? No. Traumatized? Yes.",
                    "You mastered writing programs you’ll never run again.",
                    "You didn’t waste your college life. College wasted it for you.",
                    "You’re not just a student. You’re a PDF collector.",
                    "Your code compiles. Your life doesn’t.",
                    "You survived the semester. Barely.",
                    "Your GPA is a myth. Like Bigfoot.",
                    "You’re not procrastinating. You’re just prioritizing panic.",
                    "Your degree is a piece of paper. Your stress is real."
                ];


                let intervalStarted = false;

                function startMessages() {
                document.getElementById("msg").style.display = "block";
                showMessage()
                    if (!intervalStarted) {
                        intervalStarted = true;
                    }
                }

                function showMessage() {
                    const random = messages[Math.floor(Math.random() * messages.length)];
                    document.getElementById("msg").innerText = random;
                }
                
                if (intervalStarted) {
                    setInterval(showMessage, 3000);
                }
                