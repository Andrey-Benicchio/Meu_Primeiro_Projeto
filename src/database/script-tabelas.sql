-- para criar o banco de dados , utilizei as seguintes tabelas :

create database planetadbz;
use planetadbz;

create table usuarios(
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45)
);

create table formulario(
idformulario int primary key auto_increment,
datahora datetime not null default current_timestamp,
qtdacertos int,
fkusuario int,
foreign key(fkusuario)references usuarios(idusuario)
);

 select*from usuarios;
 select*from formulario;
 select*from formulario where qtdacertos >6;
 select*from usuarios join formulario on idusuario=fkusuario;
 