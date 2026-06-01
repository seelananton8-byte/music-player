const songs = [
  {
    id: 1,
    title: "Kodi Kodi Minnalgal",
    movie: "Jeyam",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324734/Kodi_Kodi_Minnalgal-VmusiQ.Com_ojvjx3.mp3",
  },
  {
    id: 2,
    title: "Kavithayae Theriyuma",
    movie: "Jeyam",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324700/Kavithayae_Theriyuma-VmusiQ.Com_ottxjz.mp3",
  },
  {
    id: 3,
    title: "Thodu Vaanam",
    movie: "Anegan",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324442/Thodu_Vaanam-StarMusiQ.Com_r9g4gb.mp3",
  },
  {
    id: 4,
    title: "Roja Kadale",
    movie: "Anegan",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324426/Roja_Kadale-StarMusiQ.Com_w8lyhc.mp3",
  },
  {
    id: 5,
    title: "Danga Maari Oodhari",
    movie: "Anegan",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324418/Danga_Maari_Oodhari-StarMusiQ.Com_qlotfq.mp3",
  },
  {
    id: 6,
    title: "Aathadi Aathadi",
    movie: "Anegan",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
    audio:
      "https://res.cloudinary.com/djy6ynbju/video/upload/v1778324409/Aathadi_Aathadi-StarMusiQ.Com_hvfuvd.mp3",
  },
  {
    id: 7,
    title: "Entha Thesathil",
    movie: "Priyamana Thozhi",
    image: 
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780294016/Entha-Thesathil_qduklj.mp3"
  },
  {
    id: 8,
    title: "Kattre-Poongattre",
    movie: "Priyamana Thozhi",
    image:
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780294255/Kattre-Poongattre_udplvl.mp3"
  },
  {
    id: 9,
    title: "Maan Kuttiye",
    movie: "Priyamana Thozhi",
    image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780294390/Maan-Kuttiye_hbrhrk.mp3"
  },
  {
    id: 10,
    title: "Penne Neeyum",
    movie: "Priyamana Thozhi",
    image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780294647/Penne-Neeyum_jbatbu.mp3"
  },
  {
    id: 11,
    title: "Adiyae Kolluthey",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780296608/Adiyae_Kolluthey_-_TamilDada.Com_dkfglj.mp3"
  },
  {
    id: 12,
    title: "Annul Maelae",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780297082/Annul_Maelae-StarMusiQ.Com_k5k1bz.mp3"
  },
  {
    id: 13,
    title: "Mundhinam Parthene",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780297240/Mundhinam_Parthene-StarMusiQ.Com_nv6yld.mp3"
  },
  {
    id: 14,
    title: "Nenjukkul Poidum",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780297297/Nenjukkul_Peidhidum_-_TamilDada.Com_m9r59t.mp3"
  },
  {
    id: 15,
    title: "Oh Shanthi Shanth",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780297340/Oh_Shanthi_Shanth_-_TamilDada.Com_yjraia.mp3"
  },
  {
    id: 16,
    title: "Yethi Yethi",
    movie: "Vaaranam aayiram",
    image:
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1200&auto=format&fit=crop",
    audio:
    "https://res.cloudinary.com/djy6ynbju/video/upload/v1780297392/Yethi_Yethi_-_TamilDada.Com_jqtmlr.mp3"
  }
];

export default songs;