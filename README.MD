# Description:

This is a really simple application that return an fake estimation of time.
If the estimation is under 500 the server returns the time otherwise it return -1 and save the value in a database


# Next step:

The next step of this would be to add jest and create some tests for this application. Since I had little time 1-4h to work on this and a lot of learning to do (starting something from scratch) I left the testing outside the scope


# Installation:

1- clone this project

2- run: `npm install`

3- start docker and run: `docker-compose up -d`

4- Set the correct variable in the .env, section below

5- run: `npm run dev`

# .ENV:

You should set the proper credential in the .env file
suggested port:8000
USERNAME= username of the database
database name: "thunkable"
db port: 5432

You should have the database thunkable and with the table estimation_time there.

# Estimation_time schema:

```{
    id : unique id for all the values
    time:  smallint (-32768 to +32767)
}
```

# Interaction with the software:

```
curl --location --request GET 'http://localhost:8000/estimation-time' \
--header 'Content-Type: application/json'
```

# Issues:

Look at the .env if the connection is not working

# Help source to start the projet:

https://blog.logrocket.com/how-to-set-up-node-typescript-express/

# Technologies:
nodejs, express, postgress, typescript, concurrently, nodemon
