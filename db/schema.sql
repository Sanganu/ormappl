

/* Student Planner application */
 drop database  IF exists studentplanner;

create database studentplanner;

  create table stplanner
  (  id int not null auto_increment,
     subject_name varchar(30) not null,
     homework_desc varchar(100) not null,
     due_date date not null,
     completed boolean,
     date_entered timestamp DEFAULT current_timestamp,
     primary key(id));
