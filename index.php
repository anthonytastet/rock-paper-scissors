<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock/Paper/Scissors</title>
    <link rel="stylesheet" href="./style.css<?="?v=".time()?>">
    <script src="./app.js<?="?v=".time()?>" defer></script>
</head>
<body>
    <pre>
        PSEUDOCODE

        The program asks the user to choose an option between : ROCK / PAPER / SCISSORS

        If the user has made a choice

            The "computer" (randomly) chooses an option between : ROCK / PAPER / SCISSORS

            The program compares the user choice with the computer choice.

            If the user chose ROCK

                If the computer chose ROCK

                    The program asks the user to choose an option between : ROCK / PAPER / SCISSORS
                End

                If the computer chose PAPER

                    The program displays a defeat message to the user
                End

                If the computer chose SCISSORS

                    The program displays a victory message to the user
                End
            End


            If the user chose PAPER

                If the computer chose ROCK

                    The program displays a victory message to the user
                End

                If the computer chose PAPER

                    The program asks the user to choose an option between : ROCK / PAPER / SCISSORS
                End

                If the computer chose SCISSORS

                    The program displays a defeat message to the user
                End
            End
 

            If the user chose SCISSORS

                If the computer chose ROCK

                    The program displays a defeat message to the user
                End

                If the computer chose PAPER

                    The program displays a victory message to the user
                End

                If the computer chose SCISSORS

                    The program asks the user to choose an option between : ROCK / PAPER / SCISSORS
                End
            End
    </pre>
</body>
</html>