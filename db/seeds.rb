# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
description1 = "When a Chinese rebel murders Chon's estranged father and escapes to England, Chon and Roy make their way to London with revenge on their minds."



User.destroy_all
Movie.destroy_all
Show.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('movies')
ActiveRecord::Base.connection.reset_pk_sequence!('shows')



u1 = User.create!(email: 'demoUser', password: 'password');
u2 = User.create!(email: 'chris_the_great@gmail.com', password: '123456');
u3 = User.create!(email: 'theDressIsBlue@hotmail.com', password: 'password');

movie1 = Movie.create!(title: "Shanghai Knights", year: 2003, rating: 6.2, description: description1);
    video2 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Matrix-clip.mp4')
    movie1.video.attach(io: video2, filename: "matrix-clip.mp4")

movie2 = Movie.create!(title: "KungFu Panda 3", year: 2016, rating: 7.1, description: "Panda attack");
movie3 = Movie.create!(title: "Steve vs. the Volcano", year: 1995, rating: 1, description: "The volcano wins");
movie4 = Movie.create!(title: "Rush Hour 2", year: 2001, rating: 6.6, description: "Jackie and Chris at it again");
movie5 = Movie.create!(title: "The Karate Kid", year: 1984, rating: 7.2, description: "Kid beats bully");


show1 = Show.create!(title: "Tim does Karate 1", year: 1994, rating: 4.7, description: "Tim does karate in the living room.");
    video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungFulu_1.mp4')
    show1.video.attach(io: video1, filename: "show1_video_content.mp4")

show2 = Show.create!(title: "How to: Kung Fu on Vacation", year: 1995, rating: 3.1, description: "Just because you're away from home, doesn't mean you can't practice.");
show3 = Show.create!(title: "History of Kung Fu: Built by Dinosaurs", year: 1976, rating: 1.9, description: "The history of kung fu.");
show4 = Show.create!(title: "Kung Fu Greatest Hits", year: 1992, rating: 1.9, description: "Highlights from the years 1980-1989.");
show5 = Show.create!(title: "Kung Fu's greatest teachers.", year: 1998, rating: 1.9, description: "Kung Fu as taught by the greats.");


# show2 = Show.create!(title: "Tim does Karate 2", year: 1995, rating: 3.1, description: "Tim does karate in the garage.", video_url:"www.tdk2.com");
# show3 = Show.create!(title: "Tim does Karate 3", year: 1996, rating: 1.9, description: "Tim does karate in the backyard", video_url:"www.tdk3.com");
# show4 = Show.create!(title: "Tim does Karate 4", year: 1997, rating: 1.9, description: "Tim does karate at Jeff's house.", video_url:"www.tdk3.com");
# show5 = Show.create!(title: "Tim does Karate 5", year: 1998, rating: 1.9, description: "Tim does karate in the woods behind Jeff's house", video_url:"www.tdk3.com");
