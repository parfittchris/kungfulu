# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all
Movie.destroy_all
Show.destroy_all
Category.destroy_all
CategoryJoin.destroy_all
Favorite.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users');
ActiveRecord::Base.connection.reset_pk_sequence!('movies');
ActiveRecord::Base.connection.reset_pk_sequence!('shows');
ActiveRecord::Base.connection.reset_pk_sequence!('categories');
ActiveRecord::Base.connection.reset_pk_sequence!('category_joins');
ActiveRecord::Base.connection.reset_pk_sequence!('favorites');



u1 = User.create!(email: 'demoUser', password: 'password');
u2 = User.create!(email: 'chris_the_great@gmail.com', password: '123456');
u3 = User.create!(email: 'theDressIsBlue@hotmail.com', password: 'password');

movie1 = Movie.create!(title: "The Karate Kid", year: 1984, rating: 7.2, description: "A Japanese martial arts instructor agrees to teach karate to a bullied teenager.", video_type: "movie");
    movie1_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Cranke_kick.mp4');
    movie1.video.attach(io: movie1_video1, filename: "karate-clip.mp4");
    movie1_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/karate_kid_cover.jpg');
    movie1.image.attach(io: movie1_image1, filename: "karate-cover.jpg");


movie2 = Movie.create!(title: "The Matrix", year: 1999, rating: 8.7, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", video_type: "movie");
    movie2_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Matrix-clip.mp4');
    movie2.video.attach(io: movie2_video1, filename: "matrix-clip.mp4");
    movie2_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/matrix-cover.jpeg');
    movie2.image.attach(io: movie2_image1, filename: "matrix-cover.jpeg");


movie3 = Movie.create!(title: "Enter the Dragon", year: 1973, rating: 7.7, description: "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.", video_type: "movie");
    movie3_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Dragon-clip.mp4');
    movie3.video.attach(io: movie3_video1, filename: "dragon-clip.mp4");
    movie3_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/enterdragon.jpeg');
    movie3.image.attach(io: movie3_image1, filename: "dragon-cover.jpg");


movie4 = Movie.create!(title: "Kung Fu Panda", year: 2008, rating: 7.6, description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance.", video_type: "movie");
    movie4_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung-fu-panda-scene.mp4');
    movie4.video.attach(io: movie4_video1, filename: "panda-clip.mp4");
    movie4_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungfupanda.jpg');
    movie4.image.attach(io: movie4_image1, filename: "panda-cover.jpg");

movie5 = Movie.create!(title: "The Invincible Armor", year: 1977, rating: 7.1, description: "An aging martial arts expert is gifted a plaque from the Emperor declaring him the Kung Fu World Champion.", video_type: "movie");
    movie5_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung-fight.mp4')
    movie5.video.attach(io: movie5_video1, filename: "armor-clip.mp4");
    movie5_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/invicible-cover.jpeg')
    movie5.image.attach(io: movie5_image1, filename: "armor-cover.jpg");

movie6 = Movie.create!(title: "Drunken Master", year: 1978, rating: 7.6, description: "Wong Fei-Hung (Jackie Chan) is a mischievous, yet righteous young man, but after a series of incidents, his frustrated father has him disciplined by Beggar So (Siu Tin Yuen), a Master of drunken martial arts.", video_type: "movie");
    movie6_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/DrunkenMasterV1.mp4');
    movie6.video.attach(io: movie6_video1, filename: "drunkv1.mp4");
    movie6_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/DrunkenMasterI1.jpg');
    movie6.image.attach(io: movie6_image1, filename: "drunkI1.jpg");

movie7 = Movie.create!(title: "Kung Fu Hustle", year: 2004, rating: 7.7, description: "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious Axe Gang while residents of a housing complex exhibit extraordinary powers in defending their turf.", video_type: "movie");
    movie7_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungFuHustleV1.mp4');
    movie7.video.attach(io: movie7_video1, filename: "hustlev1.mp4");
    movie7_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungFuhustlewide.jpeg');
    movie7.image.attach(io: movie7_image1, filename: "hustlei1.jpg");

movie8 = Movie.create!(title: "From Beijing With Love", year: 1994, rating: 7.2, description: "An incompetent 007-wannabe is sent to locate a stolen dinosaur skull.", video_type: "movie");
    movie8_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/BeijingLoveV1.mp4');
    movie8.video.attach(io: movie8_video1, filename: "lovev1.mp4");
    movie8_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/BeijingLoveI1.jpeg');
    movie8.image.attach(io: movie8_image1, filename: "loveI1.jpeg");

movie9 = Movie.create!(title: "The Legend of 7 Golden Vampires", year: 1974, rating: 5.9, description: "While lecturing in China, Van Helsing agrees to help seven kung fu trained siblings reclaim their ancestral mountain village, now the domain of seven powerful vampires and their army of undead slaves.", video_type: "movie");
    movie9_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/7VampireV1.mp4');
    movie9.video.attach(io: movie9_video1, filename: "vampirev1.mp4");
    movie9_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/7VampireI1.jpg');
    movie9.image.attach(io: movie9_image1, filename: "vampirei1.jpg");

movie10 = Movie.create!(title: "Kung Pow: Enter the Fist", year: 2002, rating: 6.2, description: "A rough-around-the-edges martial arts master seeks revenge for his parent's death.", video_type: "movie");
    movie10_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungPowV1.mp4');
    movie10.video.attach(io: movie10_video1, filename: "kungpowv1.mp4");
    movie10_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungPowI1.jpg');
    movie10.image.attach(io: movie10_image1, filename: "kungpowI1.jpg");

show1 = Show.create!(title: "Home Movies: Tim does Kung Fu 1", year: 1994, rating: 4.7, description: "Tim does kung fu in the living room.", video_type: "show");
    show1_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungFulu_1.mp4')
    show1.video.attach(io: show1_video1, filename: "show1_video_content.mp4")
    show1_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show.jpeg')
    show1.image.attach(io: show1_image1, filename: "tim-image.jpeg")


show2 = Show.create!(title: "Home Movies: Tim does Kung Fu 2", year: 1995, rating: 3.1, description: "Tim does kung fu in the garage.", video_type: "show");
    show2_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/tim_2.mp4')
    show2.video.attach(io: show2_video1, filename: "show2_video_content.mp4")
    show2_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show2.jpeg')
    show2.image.attach(io: show2_image1, filename: 'tim2_image.jpeg')

show3 = Show.create!(title: "Home Movies: Tim does Kung Fu 3", year: 1996, rating: 1.9, description: "Tim does kung fu at Jeff's house", video_type: "show");
    show3_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/tim_3.mp4')
    show3.video.attach(io: show3_video1, filename: "show3_video_content.mp4")
    show3_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show3.jpeg')
    show3.image.attach(io: show3_image1, filename: 'tim3_image.jpeg')

# show4 = Show.create!(title: "Lessons from the Greats: Bruce Lee", year: 1994, rating: 7.9, description: "Bruce Lee teaches masterful kung fu techniques", video_type: "show");
#     show4_video1 = open('');
#     show4.video.attach(io: show4_video1, filename: "");    
#     show4_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungshow3.jpg')
#     show4.image.attach(io: show4_image1, filename: 'show4_image_jpg')
    

# show5 = Show.create!(title: "Lessons from the Greats: This Guy", year: 1998, rating: 4.2, description: "This guy spouts wisdom", video_type: "show");
#     show5_video1 = open('');
#     show5.video.attach(io: show5_video1, filename: "");   
#     show5_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungshow6.jpg')
#     show5.image.attach(io: show5_image1, filename:'show5_image.jpg')

show6 = Show.create!(title: "Jackie Chan Adventures", year: 2000, rating: 7.3, description: "Jackie Chan and his extended family must fight a criminal organization for magic talismans that could release an evil spirit.", video_type: "show");
    show6_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/jadventuresv1.mp4');
    show6.video.attach(io: show6_video1, filename: "jadventuresV1.mp4");
    show6_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/jadventuresI1.png');
    show6.image.attach(io: show6_image1, filename: "jadventuresI1.png");

show7 = Show.create!(title: "Into the Badlands", year: 2015, rating: 8.0, description: "A mighty warrior and a young boy search for enlightenment in a ruthless territory controlled by feudal barons.", video_type: "show");
    show7_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/badlandsv1.mp4');
    show7.video.attach(io: show7_video1, filename: "badlandsV1.mp4");
    show7_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/badlandswide.png');
    show7.image.attach(io: show7_image1, filename: "badlandsI1.jpg");

show8 = Show.create!(title: "Street Fighter: Assassin's Fist", year: 1998, rating: 4.2, description: " multi-layered series that looks back to the formative years of Ryu and Ken as they live a traditional warrior's life in secluded Japan. ", video_type: "show");
    show8_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/StreetFightV1.mp4');
    show8.video.attach(io: show8_video1, filename: "StreetFighterV1.mp4");
    show8_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/StreetFighterI1.jpg');
    show8.image.attach(io: show8_image1, filename: "StreetFighterI1.jpg");

show9 = Show.create!(title: "Lego Ninjago: Masters of Spinjitzu", year: 2011, rating: 6.7, description: "When the fate of their world, Ninjago, is challenged by great threats, it's up to the ninja: Kai, Jay, Cole, Zane, Lloyd and Nya to save the world.", video_type: "show");
    show9_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/LegoV1.mp4');
    show9.video.attach(io: show9_video1, filename: "legoV1.mp4");
    show9_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/legoI1.jpg');
    show9.image.attach(io: show9_image1, filename: "legoI1.jpg");

show10 = Show.create!(title: "Walker Texas Ranger", year: 1993, rating: 5.4, description: "Walker and his partner Trivette are Texas Rangers. They make it their business to battle crime in Dallas and all around the Great State of Texas.", video_type: "show");
    show10_video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/WalkerV1.mp4');
    show10.video.attach(io: show10_video1, filename: "WalkerV1.mp4");
    show10_image1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/walkerwide.jpeg');
    show10.image.attach(io: show10_image1, filename: "Walker1.mpg");



category1 = Category.create!(name: 'Action Kung-Fu');
category2 = Category.create!(name: 'Adult Animation Kung-Fu');
category3 = Category.create!(name: 'Adventure Kung-Fu');
category4 = Category.create!(name: 'Anime Kung-Fu');
category5 = Category.create!(name: 'Black Stories Kung-Fu');
category6 = Category.create!(name: 'Cartoons Kung-Fu');
category7 = Category.create!(name: 'Classics Kung-Fu');
category8 = Category.create!(name: 'Comedy Kung-Fu');
category9 = Category.create!(name: 'Cooking & Food Kung-Fu');
category10 = Category.create!(name: 'Crime Kung-Fu');
category11 = Category.create!(name: 'Documentary Kung-Fu');
category12 = Category.create!(name: 'Drama Animation Kung-Fu');
category13 = Category.create!(name: 'Family Kung-Fu');
category14 = Category.create!(name: 'Game Show Kung-Fu');
category15 = Category.create!(name: 'Health & Wellness Kung-Fu');
category16 = Category.create!(name: 'History Kung-Fu');
category17 = Category.create!(name: 'Horror Kung-Fu');
category18 = Category.create!(name: 'International Kung-Fu');
category19 = Category.create!(name: 'Kids Kung-Fu');
category20 = Category.create!(name: 'Late Night Kung-Fu');
category21 = Category.create!(name: 'Latino Kung-Fu');
category22 = Category.create!(name: 'LGBTQ+ Kung-Fu');
category23 = Category.create!(name: 'Lifestyle & Culture Kung-Fu');
category24 = Category.create!(name: 'Music Kung-Fu');
category25 = Category.create!(name: 'Mystery Kung-Fu');
category26 = Category.create!(name: 'News Kung-Fu');
category27 = Category.create!(name: 'Reality Kung-Fu');
category28 = Category.create!(name: 'Romance Kung-Fu');
category29 = Category.create!(name: 'Science & Technology Kung-Fu');
category30 = Category.create!(name: 'Science Fiction Kung-Fu');
category31 = Category.create!(name: 'Sitcom Kung-Fu');
category32 = Category.create!(name: 'Sketch Comedy Kung-Fu');
category33 = Category.create!(name: 'Sports Kung-Fu');
category34 = Category.create!(name: 'Stand Up Kung-Fu');
category35 = Category.create!(name: 'Teen Kung-Fu');
category36 = Category.create!(name: 'Thriller Kung-Fu');
category37 = Category.create!(name: 'Audio Description Kung-Fu');


catJoin1 = CategoryJoin.create!(joinable: movie1, categories: category1);
catJoin2 = CategoryJoin.create!(joinable: movie1, categories: category7);
catJoin3 = CategoryJoin.create!(joinable: movie1, categories: category35);
catJoin4 = CategoryJoin.create!(joinable: movie2, categories: category1);
catJoin5 = CategoryJoin.create!(joinable: movie2, categories: category4);
catJoin6 = CategoryJoin.create!(joinable: movie2, categories: category12);
catJoin7 = CategoryJoin.create!(joinable: movie2, categories: category30);
catJoin8 = CategoryJoin.create!(joinable: movie3, categories: category3);
catJoin9 = CategoryJoin.create!(joinable: movie3, categories: category7);
catJoin10 = CategoryJoin.create!(joinable: movie3, categories: category12);
catJoin11 = CategoryJoin.create!(joinable: movie3, categories: category18);
catJoin12 = CategoryJoin.create!(joinable: movie4, categories: category2);
catJoin13 = CategoryJoin.create!(joinable: movie4, categories: category8);
catJoin14 = CategoryJoin.create!(joinable: movie4, categories: category36);
catJoin15 = CategoryJoin.create!(joinable: movie5, categories: category3);
catJoin16 = CategoryJoin.create!(joinable: movie5, categories: category7);
catJoin17 = CategoryJoin.create!(joinable: movie5, categories: category18);
catJoin18 = CategoryJoin.create!(joinable: movie6, categories: category1);
catJoin19 = CategoryJoin.create!(joinable: movie6, categories: category8);
catJoin20 = CategoryJoin.create!(joinable: movie6, categories: category18);
catJoin21 = CategoryJoin.create!(joinable: movie7, categories: category8);
catJoin22 = CategoryJoin.create!(joinable: movie7, categories: category18);
catJoin23 = CategoryJoin.create!(joinable: movie7, categories: category1);
catJoin24 = CategoryJoin.create!(joinable: movie8, categories: category8);
catJoin25 = CategoryJoin.create!(joinable: movie8, categories: category18);
catJoin26 = CategoryJoin.create!(joinable: movie8, categories: category28);
catJoin27 = CategoryJoin.create!(joinable: movie9, categories: category8);
catJoin28 = CategoryJoin.create!(joinable: movie9, categories: category17);
catJoin29 = CategoryJoin.create!(joinable: movie9, categories: category18);
catJoin30 = CategoryJoin.create!(joinable: movie9, categories: category36);
catJoin31 = CategoryJoin.create!(joinable: movie10, categories: category1);
catJoin32 = CategoryJoin.create!(joinable: movie10, categories: category8);
catJoin33 = CategoryJoin.create!(joinable: show1, categories: category11);
catJoin34 = CategoryJoin.create!(joinable: show1, categories: category23);
catJoin35 = CategoryJoin.create!(joinable: show1, categories: category27);
catJoin36 = CategoryJoin.create!(joinable: show2, categories: category11);
catJoin37 = CategoryJoin.create!(joinable: show2, categories: category23);
catJoin38 = CategoryJoin.create!(joinable: show2, categories: category27);
catJoin39 = CategoryJoin.create!(joinable: show3, categories: category11);
catJoin40 = CategoryJoin.create!(joinable: show3, categories: category23);
catJoin41 = CategoryJoin.create!(joinable: show3, categories: category27);
catJoin42 = CategoryJoin.create!(joinable: show6, categories: category4);
catJoin43 = CategoryJoin.create!(joinable: show6, categories: category19);
catJoin44 = CategoryJoin.create!(joinable: show6, categories: category13);
catJoin45 = CategoryJoin.create!(joinable: show7, categories: category1);
catJoin46 = CategoryJoin.create!(joinable: show7, categories: category20);
catJoin47 = CategoryJoin.create!(joinable: show7, categories: category36);
catJoin48 = CategoryJoin.create!(joinable: show8, categories: category1);
catJoin49 = CategoryJoin.create!(joinable: show8, categories: category14);
catJoin50 = CategoryJoin.create!(joinable: show8, categories: category7);
catJoin51 = CategoryJoin.create!(joinable: show9, categories: category8);
catJoin52 = CategoryJoin.create!(joinable: show9, categories: category2);
catJoin53 = CategoryJoin.create!(joinable: show9, categories: category19);
catJoin54 = CategoryJoin.create!(joinable: show10, categories: category12);
catJoin55 = CategoryJoin.create!(joinable: show10, categories: category20);
catJoin56 = CategoryJoin.create!(joinable: show10, categories: category10);






    

favorite1 = Favorite.create!(user_id: 1, likeable: movie1);
favorite2 = Favorite.create!(user_id: 1, likeable: show1);
favorite3 = Favorite.create!(user_id: 1, likeable: movie2);



