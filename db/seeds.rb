# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##### Users #####
guest = User.create(
  username: "Guest",
  password: "123456",
  bio: "Hello World!",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/c_scale,h_1202/v1495749967/zst6o1gqk511es1xz4is.jpg",
  profile_url: "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"
)
natasha = User.create(
  username: "Natasha",
  password: "meimei123",
  bio: "www.natashasadikin.com",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495750925/rj8fgdnigor2qxdreaen.jpg",
  profile_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751327/i7srdum1xs1470qqytmm.jpg"
)
karla = User.create(
  username: "Karla",
  password: "karla123",
  bio: "Travel Photography",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751044/kjyqun3kod2h7v8cswts.jpg",
  profile_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751366/cnc4af3fqyzx2ljfefvg.jpg"
)
xiaojun = User.create(
  username: "XiaoJun",
  password: "xiaojun123",
  bio: "Young photographer for hire in the greater Los Angeles Area",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751115/crdaffmdcr9313nsyzhx.jpg",
  profile_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751444/hs7pnuda58swvc9ciykp.jpg"
)
charlie = User.create(
  username: "Charlie",
  password: "charlie123",
  bio: "Adventurer and visual story teller",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751196/mtmgplzzpc4l1lvppakt.jpg",
  profile_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751499/ylaii9bbihr8ijyqlfbh.jpg"
)
otto = User.create(
  username: "Otto",
  password: "otto123",
  bio: "Photographer from San Francisco, California",
  cover_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751290/q0eoyckklkshlnrt0ae1.jpg",
  profile_url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495751576/ym7r2zov6dtqswl8iz5g.jpg"
)

##### Follows #####
Follow.create(follower_id: guest.id, following_id: natasha.id)
Follow.create(follower_id: natasha.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: karla.id)
Follow.create(follower_id: karla.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: xiaojun.id)
Follow.create(follower_id: xiaojun.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: charlie.id)
Follow.create(follower_id: charlie.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: otto.id)
Follow.create(follower_id: otto.id, following_id: guest.id)

##### Photos #####

#guest
g1 = Photo.create(
  user_id: guest.id,
  title: "Kernville Getaway",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643433/kzp4jpithkqfmop0yb7n.jpg",
  description: ""
)

g2 = Photo.create(
  user_id: guest.id,
  title: "Waterfall Meditation",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643810/wb7jwwcdtvubhyfqwaib.jpg",
  description: ""
)

g3 = Photo.create(
  user_id: guest.id,
  title: "Mini waterfall",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644152/jipmxyf6xwdeier5tisz.jpg",
  description: ""
)

g4 = Photo.create(
  user_id: guest.id,
  title: "Chillin",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643542/o0upyw9brdqahwajv3mn.jpg",
  description: ""
)

g5 = Photo.create(
  user_id: guest.id,
  title: "Swimming",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643587/cjlbcvudjnhbelvqdjqm.jpg",
  description: ""
)

#natasha
n1 = Photo.create(
  user_id: natasha.id,
  title: "Waterfall Hiking",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644434/mlxxcbulew9lpbkcdidn.jpg",
  description: ""
)

n2 = Photo.create(
  user_id: natasha.id,
  title: "Iceland Hot Springs",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644466/mtd4qw63cbipwvythuma.jpg",
  description: ""
)

n3 = Photo.create(
  user_id: natasha.id,
  title: "Waterfall",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644500/fqsfmszac47nvyjlorwk.jpg",
  description: ""
)

n4 = Photo.create(
  user_id: natasha.id,
  title: "Waterfall",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644529/isls4ufiiixym8gvaj8r.jpg",
  description: ""
)

n5 = Photo.create(
  user_id: natasha.id,
  title: "Waterfall",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644550/bohr6sl0nakhlokcfrum.jpg",
  description: ""
)

#karla
k1 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Beach",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645291/vnnr8i2enryvymeskwfm.jpg",
  description: ""
)

k2 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Beach",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645309/alry7kz0rurw57r7vn8g.jpg",
  description: ""
)

k3 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Beach",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645326/r3gk8x3frthjpsnncjiv.jpg",
  description: ""
)

k4 = Photo.create(
  user_id: karla.id,
  title: "New Zealand",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645347/buaaeukkxyn1b9amtnhg.jpg",
  description: ""
)

k5 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Cove",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645364/fv3fs2knc9zz5jwzij72.jpg",
  description: ""
)

#xiaojun
x1 = Photo.create(
  user_id: xiaojun.id,
  title: "Self Portrait",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646118/h0fojnz6ttoogncrtwrc.jpg",
  description: ""
)

x2 = Photo.create(
  user_id: xiaojun.id,
  title: "Self Portrait",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646136/mim3jflhmimtebbieeol.jpg",
  description: ""
)

x3 = Photo.create(
  user_id: xiaojun.id,
  title: "Leaping",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646188/s79vefypn9umntzicfih.jpg",
  description: ""
)

x4 = Photo.create(
  user_id: xiaojun.id,
  title: "In the air",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646203/fzff4wjghl97q2w1gqyk.jpg",
  description: ""
)

x5 = Photo.create(
  user_id: xiaojun.id,
  title: "Powerful water",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646225/v6tldrumngzeiafw40y7.jpg",
  description: ""
)

#charlie
c1 = Photo.create(
  user_id: charlie.id,
  title: "Iceland Plane Wreckage",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646943/lcwn4pmkkzipullefec2.jpg",
  description: ""
)

c2 = Photo.create(
  user_id: charlie.id,
  title: "Glaciers",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646963/lcjjp8apjsnteqrjodso.jpg",
  description: ""
)

c3 = Photo.create(
  user_id: charlie.id,
  title: "Glaciers",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646983/uvrl8ze528dxftpfh6v7.jpg",
  description: ""
)

c4 = Photo.create(
  user_id: charlie.id,
  title: "Glacier Hiking",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646997/sxvmhqysujx6p4uf6b1t.jpg",
  description: ""
)

c5 = Photo.create(
  user_id: charlie.id,
  title: "Icelandic Horse",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647010/qlixzcwcyjutuzwou0bq.jpg",
  description: ""
)


#otto
o1 = Photo.create(
  user_id: otto.id,
  title: "Herding",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647738/spd9jayc7hpgf7rwuslk.jpg",
  description: ""
)

o2 = Photo.create(
  user_id: otto.id,
  title: "Cattle on the street",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647750/y9doxhwxzizd4dqgpwl5.jpg",
  description: ""
)

o3 = Photo.create(
  user_id: otto.id,
  title: "Hanging out",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647774/ciyj9ijiuqhfuouhh2rr.jpg",
  description: ""
)

o4 = Photo.create(
  user_id: otto.id,
  title: "Early morning",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495648045/psyvoqdcjg9tjieohrot.jpg",
  description: ""
)

o5 = Photo.create(
  user_id: otto.id,
  title: "Tahoe",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495757225/5_tm5fvo.jpg",
  description: ""
)

#####################################################################################################################

#guest
g6 = Photo.create(
  user_id: guest.id,
  title: "Random Alley",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643655/sjvwb7ygwf8nhhpywbf0.jpg",
  description: ""
)

g7 = Photo.create(
  user_id: guest.id,
  title: "Big Wheels",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658424/yqybdo6rsfzsmwzgcfet.jpg",
  description: ""
)

g8 = Photo.create(
  user_id: guest.id,
  title: "Hanging Laundry",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658452/p2mrt0jwzvm2wbres84y.jpg",
  description: ""
)

g9 = Photo.create(
  user_id: guest.id,
  title: "European Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644130/uhl7kidqpmju8nofwgo8.jpg",
  description: ""
)

g10 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)

#natasha
n6 = Photo.create(
  user_id: natasha.id,
  title: "",
  url: "",
  description: ""
)

n7 = Photo.create(
  user_id: natasha.id,
  title: "",
  url: "",
  description: ""
)

n8 = Photo.create(
  user_id: natasha.id,
  title: "",
  url: "",
  description: ""
)

n9 = Photo.create(
  user_id: natasha.id,
  title: "",
  url: "",
  description: ""
)

n10 = Photo.create(
  user_id: natasha.id,
  title: "",
  url: "",
  description: ""
)

#karla
k6 = Photo.create(
  user_id: karla.id,
  title: "Getting Dark",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645381/nv9zsq5lf1pmi0hvq1ox.jpg",
  description: ""
)

k7 = Photo.create(
  user_id: karla.id,
  title: "",
  url: "",
  description: ""
)

k8 = Photo.create(
  user_id: karla.id,
  title: "",
  url: "",
  description: ""
)

k9 = Photo.create(
  user_id: karla.id,
  title: "",
  url: "",
  description: ""
)

k10 = Photo.create(
  user_id: karla.id,
  title: "",
  url: "",
  description: ""
)

#xiaojun
x6 = Photo.create(
  user_id: xiaojun.id,
  title: "",
  url: "",
  description: ""
)

x7 = Photo.create(
  user_id: xiaojun.id,
  title: "",
  url: "",
  description: ""
)

x8 = Photo.create(
  user_id: xiaojun.id,
  title: "",
  url: "",
  description: ""
)

x9 = Photo.create(
  user_id: xiaojun.id,
  title: "",
  url: "",
  description: ""
)

x10 = Photo.create(
  user_id: xiaojun.id,
  title: "",
  url: "",
  description: ""
)

#charlie
c6 = Photo.create(
  user_id: charlie.id,
  title: "Northern Lights",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647311/linkfoofhy3fam5uaml2.jpg",
  description: ""
)

c7 = Photo.create(
  user_id: charlie.id,
  title: "",
  url: "",
  description: ""
)

c8 = Photo.create(
  user_id: charlie.id,
  title: "",
  url: "",
  description: ""
)

c9 = Photo.create(
  user_id: charlie.id,
  title: "",
  url: "",
  description: ""
)

c10 = Photo.create(
  user_id: charlie.id,
  title: "",
  url: "",
  description: ""
)

#otto
o6 = Photo.create(
  user_id: otto.id,
  title: "",
  url: "",
  description: ""
)

o7 = Photo.create(
  user_id: otto.id,
  title: "",
  url: "",
  description: ""
)

o8 = Photo.create(
  user_id: otto.id,
  title: "",
  url: "",
  description: ""
)

o9 = Photo.create(
  user_id: otto.id,
  title: "",
  url: "",
  description: ""
)

o10 = Photo.create(
  user_id: otto.id,
  title: "",
  url: "",
  description: ""
)

#####################################################################################################################

#guest
g11 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)

g12 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)

g13 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)

g14 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)

g15 = Photo.create(
  user_id: guest.id,
  title: "",
  url: "",
  description: ""
)
