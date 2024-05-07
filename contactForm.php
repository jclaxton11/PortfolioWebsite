<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Blog Post</title>
    <style>
        form {
            max-width: 600px;
            margin: 2%;
            justify-content: center;
        }
        
        .form-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin: 5px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin: 5px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        select {
            width: 100%;
            padding: 10px;
            margin: 5px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        label {
            color: white;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
    <script>
    window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };
</script>
</head>
<body>

    <form id="form" action="https://api.web3forms.com/submit" method="POST">
        <div class="form-container">
<!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="14909654-469c-40e0-87d9-6546172e3000">

    <!-- Form Inputs. Each input must have a name="" attribute -->
    <label>Name:</label>
    <input type="text" name="name" required>
    <label>Email:</label>
    <input type="email" name="email" required>
    <label>Message:</label>
    <textarea name="message" required></textarea>

    <!-- hCaptcha Spam Protection -->
    <div class="h-captcha" data-captcha="true"></div>

    <input type="submit"></input>
</div>
    </form>

<!-- Required for hCaptcha -->
<script src="https://web3forms.com/client/script.js" async defer></script>
</body>