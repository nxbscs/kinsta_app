create database todoapp;

create table todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(255)
);

create table users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

insert into todos(id,user_email,title,progress,date)
values('0','brian@gmail.com','first_todo',10,'01/01/2024');