create table projet(
    id serial primary key,
    titre varchar(100),
    id_type int ,
    description text
);
create table type(
    id serial primary key,
    nom varchar(20)
);

create table utilisateur(
    id serial primary key,
    nom varchar(50),
    login varchar(50),    
    mdp varchar(20)
);
insert into utilisateur values(default,'user1','user1','user1');
alter table projet add foreign key (id_type) references type(id);