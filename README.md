# INTERVIEW TEST FROM FCORP

## Prerequisite
You need install Docker and docker compose plugin.
## Usage
I used ReactJS + Vite to build the webpage.

First, you need to run some services such as Nodejsapp, Elasticsearch and Webpage using docker compose
```bash
docker compose up
```
Then, if you want to add dummy data into elasticsearch, using this command
```bash
./migrate.sh
```
Or if you want to add dummy data manualy, you can use Postman and call the api in your js-dev-test.md file

## Demo
#### Main page
![Screenshot](./picture_demo/scrshot_1.png)
#### Comment section
![Screenshot](./picture_demo/scrshot_2.png)

## Note
All input element in my webpage is use enter key down to accept and process value from input. So if you want to comment or reply, just typing and then press enter, if you want to hide the input element, click again the button which open input to hide that input.