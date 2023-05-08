# How to Integrate Our API to Upload Video to Your Own CMS

In this tutorial, we will guide you through the process of integrating our API to upload videos to your own Content Management System (CMS). We will be using PHP for this example, and we have provided a PHP class for you to use in your application. Please note that this tutorial is not based on any specific frameworks and assumes a general understanding of PHP.

## Step 1: Copy the provided PHP class
We have provided a gist containing the PHP class you need to use in your application. Copy this class into your PHP library, and ensure that it can be called from other classes or controllers in your application. You can access the gist here: [Gist URL](https://gist.github.com/arryanggaputra/287e020b46b569ef7fd8c0733b348839)

## Step 2: Store uploaded video on your server
Before the video can be uploaded to our server, it must be stored somewhere on your server. You can use any method or storage solution you prefer, such as storing the video in a folder on your server or using a cloud storage service. Make sure to keep track of the URL path to the video, as it will be required in the next step.

## Step 3: Prepare required fields for uploading
To upload a video using our API, you need to prepare the following fields:

    url: The URL path to the video stored on your server
    title: A text field for the video title
    description: A long text field for the video description
    tags: A text field for any relevant tags
    category: A text field for the video category
    is_created_for_kids: A boolean field indicating whether the video is suitable for kids

Ensure that these fields are properly set up in your CMS, and are accessible when making API calls.

## Step 4: Perform the upload
Once the video has been uploaded to your server and you have the path to the video, you can proceed with the upload to our server using our API. To do this, you will need to create an instance of the PHP class you copied in Step 1 and call the appropriate method, passing in the required fields as parameters. 

It's important to keep your API credentials and sensitive information secure by not hardcoding them directly into your PHP files. One way to achieve this is by using environment variables with a .env file. In this updated example, we will use the popular package [vlucas/phpdotenv](https://github.com/vlucas/phpdotenv) to load the credentials from a .env file.

First, install the [vlucas/phpdotenv](https://github.com/vlucas/phpdotenv) package using Composer:

```sh
composer require vlucas/phpdotenv
```

Next, create a .env file in your project root directory with the following content:

```
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
USERNAME=your_username
PASSWORD=your_password
```

Replace `your_client_id`, `your_client_secret`, `your_username`, and `your_password` with your actual API credentials and user information.

Now, update the sample code to use the credentials from the .env file:

```php
<?php
require_once 'vendor/autoload.php'; // Include Composer's autoloader
require_once 'path/to/DailymotionUploader.php';

// Load environment variables from the .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Set your API credentials and user information from the .env file
$client_id = $_ENV['CLIENT_ID'];
$client_secret = $_ENV['CLIENT_SECRET'];
$username = $_ENV['USERNAME'];
$password = $_ENV['PASSWORD'];

// Create an instance of the DailymotionUploader class
$uploader = new DailymotionUploader($client_id, $client_secret, $username, $password);

// Set the required fields
$url = 'path/to/your/video';
$title = 'Your Video Title';
$description = 'Your Video Description';
$tags = 'tag1,tag2,tag3';
$category = 'Your Video Category';
$is_created_for_kids = true; // Set to true if the video is for kids, otherwise false

// Call the uploadVideo method
$response = $uploader->uploadVideo($url, $title, $description, $tags, $category, $is_created_for_kids);

// Check for success and handle the response
if (isset($response['id'])) {
    echo "Video uploaded successfully! Video ID: " . $response['id'];
} else {
    echo "Error uploading video: " . $response['error']['message'];
}
```

By using the .env file and vlucas/phpdotenv, your API credentials are now separated from your code and can be managed securely. Remember not to commit your .env file to version control systems like Git. Instead, include a .env.example file in your repository with placeholder values for other developers to copy and set up their own environment.

