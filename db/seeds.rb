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
  title: "European Architecture",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658473/ghu4k5n4lzo5jig1ngl7.jpg",
  description: ""
)

#natasha
n6 = Photo.create(
  user_id: natasha.id,
  title: "Sitting on a Glacier",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644570/qy5kwunyvwsg5pz63wyi.jpg",
  description: ""
)

n7 = Photo.create(
  user_id: natasha.id,
  title: "Weekend getaway",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644594/dsvjbz64mknjd79k3irx.jpg",
  description: ""
)

n8 = Photo.create(
  user_id: natasha.id,
  title: "Rustic Treehouse Getaway",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644651/d2yixehohs7mdkisrhep.jpg",
  description: ""
)

n9 = Photo.create(
  user_id: natasha.id,
  title: "Relaxing",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644739/km6qqjrffymdwr40f8s6.jpg",
  description: ""
)

n10 = Photo.create(
  user_id: natasha.id,
  title: "Lantern Festival",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644716/g63673cpxkhot64mxyfq.jpg",
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
  title: "Beam of light",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645627/a41i3rgwkq6ep9wijysi.jpg",
  description: ""
)

k8 = Photo.create(
  user_id: karla.id,
  title: "Antelope Canyon",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645726/hwtqifatwd26powjur1z.jpg",
  description: ""
)

k9 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645473/uggyhev2qz3gkvqrae6u.jpg",
  description: ""
)

k10 = Photo.create(
  user_id: karla.id,
  title: "New Zealand Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645427/j9rm6smhsyvmenonfezj.jpg",
  description: ""
)

#xiaojun
x6 = Photo.create(
  user_id: xiaojun.id,
  title: "Big Waterfall",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646242/opie64fbzn9rhs8ymfee.jpg",
  description: ""
)

x7 = Photo.create(
  user_id: xiaojun.id,
  title: "Hiking Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646363/aouu3aj84im4ufoynxvi.jpg",
  description: ""
)

x8 = Photo.create(
  user_id: xiaojun.id,
  title: "Joshua Tree",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495817624/8_adhuos.jpg",
  description: ""
)

x9 = Photo.create(
  user_id: xiaojun.id,
  title: "Trees in the desert",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646325/rvy24vbbhvn54yqlegld.jpg",
  description: ""
)

x10 = Photo.create(
  user_id: xiaojun.id,
  title: "Greenery in the desert",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646383/odqtbqrxftgbjat8zecr.jpg",
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
  title: "Karen",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495817780/7_djbbxk.jpg",
  description: ""
)

c8 = Photo.create(
  user_id: charlie.id,
  title: "Karen",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647038/eb4jlzdvol9exicncrwy.jpg",
  description: ""
)

c9 = Photo.create(
  user_id: charlie.id,
  title: "Karen",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647083/ybg8f5rflfmvoxrhfhf0.jpg",
  description: ""
)

c10 = Photo.create(
  user_id: charlie.id,
  title: "Here comes the fog",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647136/qit0psamljyt0bzwhtjd.jpg",
  description: ""
)

#otto
o6 = Photo.create(
  user_id: otto.id,
  title: "Waterfalls in Iceland",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646225/v6tldrumngzeiafw40y7.jpg",
  description: ""
)

o7 = Photo.create(
  user_id: otto.id,
  title: "Hiking in Iceland",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647790/wn9mlezob9g10supixgu.jpg",
  description: ""
)

o8 = Photo.create(
  user_id: otto.id,
  title: "Iceland Wanderings",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647823/oypcgooeqa5atmomk3pc.jpg",
  description: ""
)

o9 = Photo.create(
  user_id: otto.id,
  title: "Huge Waterfalls",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647840/szaib6jpe5k7knkd3m5p.jpg",
  description: ""
)

o10 = Photo.create(
  user_id: otto.id,
  title: "Huge Waterfalls",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647857/aodzqhc62yubpdkmf2vc.jpg",
  description: ""
)

#####################################################################################################################

#guest
g11 = Photo.create(
  user_id: guest.id,
  title: "Venice canals",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658503/oqra77dbs4site9ut1u9.jpg",
  description: ""
)

g12 = Photo.create(
  user_id: guest.id,
  title: "Lost in Venice",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658524/ph0wajabvpx9fkhd7qzn.jpg",
  description: ""
)

g13 = Photo.create(
  user_id: guest.id,
  title: "Plaza steps",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495658610/cafbbmnhdqgkh7jfcfdw.jpg",
  description: ""
)

g14 = Photo.create(
  user_id: guest.id,
  title: "Eiffel Tower",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495643724/bgjcov8udn4jolxjii6q.jpg",
  description: ""
)

g15 = Photo.create(
  user_id: guest.id,
  title: "I love ice cream",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644012/hqqhxi9in7rbtdjmcmvp.jpg",
  description: ""
)

#natasha
n11 = Photo.create(
  user_id: natasha.id,
  title: "New York Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644892/om2h5kwti2p0svgxbxug.jpg",
  description: ""
)

n12 = Photo.create(
  user_id: natasha.id,
  title: "Under the Bridge",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644909/wal0f4zso82ilomzad6n.jpg",
  description: ""
)

n13 = Photo.create(
  user_id: natasha.id,
  title: "Brooklyn",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644926/u849oq1whgja8cfa2uqs.jpg",
  description: ""
)

n14 = Photo.create(
  user_id: natasha.id,
  title: "Oregon Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644758/xzdhdodncbm0m8pgo6jh.jpg",
  description: ""
)

n15 = Photo.create(
  user_id: natasha.id,
  title: "Waterfall in Oregon",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495644776/nwycfw32brbkxjgj8zbs.jpg",
  description: ""
)

#karla
k11 = Photo.create(
  user_id: karla.id,
  title: "Cow in New Zealand",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645409/kii21crs9kkowwoms3ug.jpg",
  description: ""
)

k12 = Photo.create(
  user_id: karla.id,
  title: "Hobbiton",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645487/dwyhvyo6wxnb1c7mtsyy.jpg",
  description: ""
)

k13 = Photo.create(
  user_id: karla.id,
  title: "Hobbiton",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645512/c3lbn6w3jwao1pjtto7u.jpg",
  description: ""
)

k14 = Photo.create(
  user_id: karla.id,
  title: "Hobbiton",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645545/ylsxmy4m8iumjka4atjb.jpg",
  description: ""
)

k15 = Photo.create(
  user_id: karla.id,
  title: "Hobbiton",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495645533/gwmzxxgxfpueumxjpman.jpg",
  description: ""
)

#xiaojun
x11 = Photo.create(
  user_id: xiaojun.id,
  title: "Self Portrait",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495819283/11_yyexex.jpg",
  description: ""
)

x12 = Photo.create(
  user_id: xiaojun.id,
  title: "Self Portrait",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495819286/12_qfexod.jpg",
  description: ""
)

x13 = Photo.create(
  user_id: xiaojun.id,
  title: "Campervan",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646402/qprieu6x4c75mgjyq4wk.jpg",
  description: ""
)

x14 = Photo.create(
  user_id: xiaojun.id,
  title: "Lost in the Fields",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646419/zykvxbbihpz4b9gplv9g.jpg",
  description: ""
)

x15 = Photo.create(
  user_id: xiaojun.id,
  title: "Wandering in the fields",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495646432/fjgdiqq7xjoym70e4zw5.jpg",
  description: ""
)

#charlie
c11 = Photo.create(
  user_id: charlie.id,
  title: "Rocky Beach",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647100/l7buffxoj4x7p53qivif.jpg",
  description: ""
)

c12 = Photo.create(
  user_id: charlie.id,
  title: "Misty Beach",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647120/lsljrk0jpzzqs0jpktax.jpg",
  description: ""
)

c13 = Photo.create(
  user_id: charlie.id,
  title: "Hiking in the Forest",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647263/dphdzvmmywkxpoeoitjy.jpg",
  description: ""
)

c14 = Photo.create(
  user_id: charlie.id,
  title: "Light in the Forest",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647281/pcxrykvjadgjxvu8g0pj.jpg",
  description: ""
)

c15 = Photo.create(
  user_id: charlie.id,
  title: "Grand Canyon",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495659010/acvkviian7rnikrfwmea.jpg",
  description: ""
)

#otto
o11 = Photo.create(
  user_id: otto.id,
  title: "Hiking Adventures",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647993/q45xmkolhjullrga1mzn.jpg",
  description: ""
)

o12 = Photo.create(
  user_id: otto.id,
  title: "Hiking Friends",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495648010/yv1qdqbf8dtdkluigipm.jpg",
  description: ""
)

o13 = Photo.create(
  user_id: otto.id,
  title: "Nowhere",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647873/z1ynaqtae0mgl3ml0umt.jpg",
  description: ""
)

o14 = Photo.create(
  user_id: otto.id,
  title: "Empty",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647892/skoleolmfsr1ptj0jwec.jpg",
  description: ""
)

o15 = Photo.create(
  user_id: otto.id,
  title: "Abandoned",
  url: "https://res.cloudinary.com/da6jfurzj/image/upload/v1495647905/kvbordhi34gl4kfcgspo.jpg",
  description: ""
)

#####################################################################################################################

#guest
g16 = Photo.create(
  user_id: guest.id,
  title: "Golden Gate",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495832329/zx0icgsvknszejsd5pjt.jpg",
  description: ""
)

g17 = Photo.create(
  user_id: guest.id,
  title: "Baker Beach",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495643784/e3brtdhxcb7ztbaoiuf3.jpg",
  description: ""
)

g18 = Photo.create(
  user_id: guest.id,
  title: "Night",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495643852/jnq2udsdbveu6ferfvf6.jpg",
  description: ""
)

g19 = Photo.create(
  user_id: guest.id,
  title: "Night Shot",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495643893/psdkdpn2mxmrkfdqab3i.jpg",
  description: ""
)

g20 = Photo.create(
  user_id: guest.id,
  title: "Desert",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495643926/sw08utokjzrtfyiniyse.jpg",
  description: ""
)

#natasha
n16 = Photo.create(
  user_id: natasha.id,
  title: "Reflection",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495644827/fyahbdtxbhgnqjkshvlv.jpg",
  description: ""
)

n17 = Photo.create(
  user_id: natasha.id,
  title: "Milky Way",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495644857/uxzqldnnojjbxkjtabax.jpg",
  description: ""
)

n18 = Photo.create(
  user_id: natasha.id,
  title: "Playing with light",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495644877/ibelht8g29byhx9ughbf.jpg",
  description: ""
)

n19 = Photo.create(
  user_id: natasha.id,
  title: "Mountain Landscape",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658033/cqtoyv3t5fxqw2iig1jz.jpg",
  description: ""
)

n20 = Photo.create(
  user_id: natasha.id,
  title: "Hiking",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495644971/muaygprjikct7olrto6f.jpg",
  description: ""
)

#karla
k16 = Photo.create(
  user_id: karla.id,
  title: "Waterfall Hike",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495645569/gzznl9oxlyyq3j11wjaw.jpg",
  description: ""
)

k17 = Photo.create(
  user_id: karla.id,
  title: "Waterfall Hike",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495645588/fgy88ykti2dqlriwvxfy.jpg",
  description: ""
)

k18 = Photo.create(
  user_id: karla.id,
  title: "Waterfall Hike",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495645606/khefbx8jgoaasvzqzjjk.jpg",
  description: ""
)

k19 = Photo.create(
  user_id: karla.id,
  title: "New Zealand",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495645444/bnatm87bjnhvifgapict.jpg",
  description: ""
)

k20 = Photo.create(
  user_id: karla.id,
  title: "New Zealand",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495645458/wllulwuklwigbgddt8ip.jpg",
  description: ""
)

#xiaojun
x16 = Photo.create(
  user_id: xiaojun.id,
  title: "Road Trip",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495646457/ksi0v2k2ovh0j67ctpjc.jpg",
  description: ""
)

x17 = Photo.create(
  user_id: xiaojun.id,
  title: "Road Trip",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495646469/exakxxpaof6a9vcxv4lk.jpg",
  description: ""
)

x18 = Photo.create(
  user_id: xiaojun.id,
  title: "Dogs in the Office",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495646299/bioctn3l2emzkhty4ywk.jpg",
  description: ""
)

x19 = Photo.create(
  user_id: xiaojun.id,
  title: "Dogs in the Office",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495646312/sr7h7t40a9pwerusswpj.jpg",
  description: ""
)

x20 = Photo.create(
  user_id: xiaojun.id,
  title: "Yosemite",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658368/xhqnae87owryg4ciil2c.jpg",
  description: ""
)

#charlie
c16 = Photo.create(
  user_id: charlie.id,
  title: "Camping",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495647151/mit5meyft7pj6a00zifl.jpg",
  description: ""
)

c17 = Photo.create(
  user_id: charlie.id,
  title: "Camping",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495647163/hdvbbqruywjdyidswd3j.jpg",
  description: ""
)

c18 = Photo.create(
  user_id: charlie.id,
  title: "Hiking",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495647177/cmoh0cqyueap5idpkry0.jpg",
  description: ""
)

c19 = Photo.create(
  user_id: charlie.id,
  title: "On the Edge",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495647235/nuqrdntrsuacappljx4v.jpg",
  description: ""
)

c20 = Photo.create(
  user_id: charlie.id,
  title: "Horseshoe",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495647249/jqfnphjtpr6n61nerxys.jpg",
  description: ""
)

#otto
o16 = Photo.create(
  user_id: otto.id,
  title: "Vatican",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658696/sjibyfsxwtbdkdp5hbx4.jpg",
  description: ""
)

o17 = Photo.create(
  user_id: otto.id,
  title: "Pantheon",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658724/lzzpura4ayzznxzoyhd8.jpg",
  description: ""
)

o18 = Photo.create(
  user_id: otto.id,
  title: "Colloseum",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658763/qf87uhvgfpaciar5y5qf.jpg",
  description: ""
)

o19 = Photo.create(
  user_id: otto.id,
  title: "On a River Boat",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658799/hjoaqh10bjzzgntnbzlz.jpg",
  description: ""
)

o20 = Photo.create(
  user_id: otto.id,
  title: "France",
  url: "http://res.cloudinary.com/da6jfurzj/image/upload/v1495658822/zegsqkxxrlmyccrez08r.jpg",
  description: ""
)

#####################################################################################################################
