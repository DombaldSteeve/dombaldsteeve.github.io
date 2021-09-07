    <?php

        echo "HI !!!";

        

        /*

        if (isset($_POST['submit'])) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];

            $mailTo = "dombald.steeve@gmail.com";
            $headers = "From: ".$email;
            $txt = "You have received an email from ".$name.".\n\n".$message;

            mail($maiTo, $email, $txt, $headers);
            header("Location: index.php?mailsend");
        }
 */

















    /*

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'testformulaireback@steeve.com';

    $email_subject = "New Form Submission";

    $email_body =   "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User message: $message.\n";

    $to = "dombald.steeve@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: main.html");

    


    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['message'];

    //Database connection 

    $conn = new mysqli('localhost', 'root', '','contactformportfo');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into contactmessage(name, email, message)values(?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $text);
        $stmt->execute();
        echo "Registration Successfully !";
        $stmt->close();
        $conn->close();
    }



    */


    
