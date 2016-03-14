
  2
var teams = ["Ankaragucu","Antalyaspor","Besiktas","Bursaspor","Eskisehirspor","Fenerbahce","Galatasaray",
"Gaziantepspor","Genclerbirligi","IstanbulBB","Karabukspor","Kayserispor","Manisaspor","MersinIY","Orduspor","Samsunspor","Sivasspor","Trabzonspor"];

var matches = [
 { team1: "Ankaragucu", team2: "Antalyaspor", goal1: 0, goal2: 3},
 { team1: "Ankaragucu", team2: "Besiktas", goal1: 0, goal2: 0},
 { team1: "Ankaragucu", team2: "Bursaspor", goal1: 0, goal2: 0},
 { team1: "Ankaragucu", team2: "Eskisehirspor", goal1: 2, goal2: 5},
 { team1: "Ankaragucu", team2: "Fenerbahce", goal1: 0, goal2: 2},
 { team1: "Ankaragucu", team2: "Galatasaray", goal1: 0, goal2: 3},
 { team1: "Ankaragucu", team2: "Gaziantepspor", goal1: 0, goal2: 0},
 { team1: "Ankaragucu", team2: "Genclerbirligi", goal1: 0, goal2: 1},
 { team1: "Ankaragucu", team2: "IstanbulBB", goal1: 1, goal2: 2},
 { team1: "Ankaragucu", team2: "Karabukspor", goal1: 2, goal2: 1},
 { team1: "Ankaragucu", team2: "Kayserispor", goal1: 0, goal2: 5},
 { team1: "Ankaragucu", team2: "Manisaspor", goal1: 0, goal2: 1},
 { team1: "Ankaragucu", team2: "MersinIY", goal1: 1, goal2: 2},
 { team1: "Ankaragucu", team2: "Orduspor", goal1: 0, goal2: 2},
 { team1: "Ankaragucu", team2: "Samsunspor", goal1: 0, goal2: 3},
 { team1: "Ankaragucu", team2: "Sivasspor", goal1: 1, goal2: 2},
 { team1: "Ankaragucu", team2: "Trabzonspor", goal1: 0, goal2: 4},
 { team1: "Antalyaspor", team2: "Ankaragucu", goal1: 1, goal2: 0},
 { team1: "Antalyaspor", team2: "Besiktas", goal1: 1, goal2: 2},
 { team1: "Antalyaspor", team2: "Bursaspor", goal1: 1, goal2: 3},
 { team1: "Antalyaspor", team2: "Eskisehirspor", goal1: 0, goal2: 0},
 { team1: "Antalyaspor", team2: "Fenerbahce", goal1: 0, goal2: 0},
 { team1: "Antalyaspor", team2: "Galatasaray", goal1: 0, goal2: 0},
 { team1: "Antalyaspor", team2: "Gaziantepspor", goal1: 1, goal2: 0},
 { team1: "Antalyaspor", team2: "Genclerbirligi", goal1: 2, goal2: 2},
 { team1: "Antalyaspor", team2: "IstanbulBB", goal1: 2, goal2: 1},
 { team1: "Antalyaspor", team2: "Karabukspor", goal1: 2, goal2: 1},
 { team1: "Antalyaspor", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Antalyaspor", team2: "Manisaspor", goal1: 2, goal2: 1},
 { team1: "Antalyaspor", team2: "MersinIY", goal1: 1, goal2: 2},
 { team1: "Antalyaspor", team2: "Orduspor", goal1: 1, goal2: 1},
 { team1: "Antalyaspor", team2: "Samsunspor", goal1: 0, goal2: 2},
 { team1: "Antalyaspor", team2: "Sivasspor", goal1: 2, goal2: 2},
 { team1: "Antalyaspor", team2: "Trabzonspor", goal1: 2, goal2: 1},
 { team1: "Besiktas", team2: "Ankaragucu", goal1: 3, goal2: 1},
 { team1: "Besiktas", team2: "Antalyaspor", goal1: 1, goal2: 0},
 { team1: "Besiktas", team2: "Bursaspor", goal1: 3, goal2: 1},
 { team1: "Besiktas", team2: "Eskisehirspor", goal1: 2, goal2: 0},
 { team1: "Besiktas", team2: "Fenerbahce", goal1: 2, goal2: 2},
 { team1: "Besiktas", team2: "Galatasaray", goal1: 0, goal2: 0},
 { team1: "Besiktas", team2: "Gaziantepspor", goal1: 3, goal2: 2},
 { team1: "Besiktas", team2: "Genclerbirligi", goal1: 3, goal2: 2},
 { team1: "Besiktas", team2: "IstanbulBB", goal1: 1, goal2: 1},
 { team1: "Besiktas", team2: "Karabukspor", goal1: 1, goal2: 0},
 { team1: "Besiktas", team2: "Kayserispor", goal1: 0, goal2: 2},
 { team1: "Besiktas", team2: "Manisaspor", goal1: 4, goal2: 1},
 { team1: "Besiktas", team2: "MersinIY", goal1: 0, goal2: 1},
 { team1: "Besiktas", team2: "Orduspor", goal1: 2, goal2: 1},
 { team1: "Besiktas", team2: "Samsunspor", goal1: 0, goal2: 1},
 { team1: "Besiktas", team2: "Sivasspor", goal1: 3, goal2: 1},
 { team1: "Besiktas", team2: "Trabzonspor", goal1: 1, goal2: 2},
 { team1: "Bursaspor", team2: "Ankaragucu", goal1: 2, goal2: 1},
 { team1: "Bursaspor", team2: "Antalyaspor", goal1: 0, goal2: 0},
 { team1: "Bursaspor", team2: "Besiktas", goal1: 1, goal2: 2},
 { team1: "Bursaspor", team2: "Eskisehirspor", goal1: 0, goal2: 1},
 { team1: "Bursaspor", team2: "Fenerbahce", goal1: 0, goal2: 2},
 { team1: "Bursaspor", team2: "Galatasaray", goal1: 1, goal2: 0},
 { team1: "Bursaspor", team2: "Gaziantepspor", goal1: 0, goal2: 2},
 { team1: "Bursaspor", team2: "Genclerbirligi", goal1: 4, goal2: 0},
 { team1: "Bursaspor", team2: "IstanbulBB", goal1: 2, goal2: 1},
 { team1: "Bursaspor", team2: "Karabukspor", goal1: 3, goal2: 0},
 { team1: "Bursaspor", team2: "Kayserispor", goal1: 3, goal2: 0},
 { team1: "Bursaspor", team2: "Manisaspor", goal1: 0, goal2: 0},
 { team1: "Bursaspor", team2: "MersinIY", goal1: 1, goal2: 0},
 { team1: "Bursaspor", team2: "Orduspor", goal1: 0, goal2: 0},
 { team1: "Bursaspor", team2: "Samsunspor", goal1: 1, goal2: 0},
 { team1: "Bursaspor", team2: "Sivasspor", goal1: 1, goal2: 2},
 { team1: "Bursaspor", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "Eskisehirspor", team2: "Ankaragucu", goal1: 3, goal2: 2},
 { team1: "Eskisehirspor", team2: "Antalyaspor", goal1: 1, goal2: 0},
 { team1: "Eskisehirspor", team2: "Besiktas", goal1: 2, goal2: 1},
 { team1: "Eskisehirspor", team2: "Bursaspor", goal1: 1, goal2: 1},
 { team1: "Eskisehirspor", team2: "Fenerbahce", goal1: 2, goal2: 1},
 { team1: "Eskisehirspor", team2: "Galatasaray", goal1: 0, goal2: 0},
 { team1: "Eskisehirspor", team2: "Gaziantepspor", goal1: 0, goal2: 2},
 { team1: "Eskisehirspor", team2: "Genclerbirligi", goal1: 0, goal2: 0},
 { team1: "Eskisehirspor", team2: "IstanbulBB", goal1: 3, goal2: 1},
 { team1: "Eskisehirspor", team2: "Karabukspor", goal1: 1, goal2: 2},
 { team1: "Eskisehirspor", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Eskisehirspor", team2: "Manisaspor", goal1: 0, goal2: 2},
 { team1: "Eskisehirspor", team2: "MersinIY", goal1: 2, goal2: 0},
 { team1: "Eskisehirspor", team2: "Orduspor", goal1: 0, goal2: 1},
 { team1: "Eskisehirspor", team2: "Samsunspor", goal1: 1, goal2: 0},
 { team1: "Eskisehirspor", team2: "Sivasspor", goal1: 1, goal2: 1},
 { team1: "Eskisehirspor", team2: "Trabzonspor", goal1: 0, goal2: 2},
 { team1: "Fenerbahce", team2: "Ankaragucu", goal1: 4, goal2: 2},
 { team1: "Fenerbahce", team2: "Antalyaspor", goal1: 2, goal2: 0},
 { team1: "Fenerbahce", team2: "Besiktas", goal1: 2, goal2: 0},
 { team1: "Fenerbahce", team2: "Bursaspor", goal1: 1, goal2: 0},
 { team1: "Fenerbahce", team2: "Eskisehirspor", goal1: 1, goal2: 0},
 { team1: "Fenerbahce", team2: "Galatasaray", goal1: 2, goal2: 2},
 { team1: "Fenerbahce", team2: "Gaziantepspor", goal1: 3, goal2: 1},
 { team1: "Fenerbahce", team2: "Genclerbirligi", goal1: 6, goal2: 1},
 { team1: "Fenerbahce", team2: "IstanbulBB", goal1: 4, goal2: 2},
 { team1: "Fenerbahce", team2: "Karabukspor", goal1: 1, goal2: 0},
 { team1: "Fenerbahce", team2: "Kayserispor", goal1: 4, goal2: 0},
 { team1: "Fenerbahce", team2: "Manisaspor", goal1: 1, goal2: 1},
 { team1: "Fenerbahce", team2: "MersinIY", goal1: 2, goal2: 1},
 { team1: "Fenerbahce", team2: "Orduspor", goal1: 1, goal2: 0},
 { team1: "Fenerbahce", team2: "Samsunspor", goal1: 0, goal2: 0},
 { team1: "Fenerbahce", team2: "Sivasspor", goal1: 4, goal2: 2},
 { team1: "Fenerbahce", team2: "Trabzonspor", goal1: 1, goal2: 0},
 { team1: "Galatasaray", team2: "Ankaragucu", goal1: 4, goal2: 0},
 { team1: "Galatasaray", team2: "Antalyaspor", goal1: 1, goal2: 1},
 { team1: "Galatasaray", team2: "Besiktas", goal1: 3, goal2: 2},
 { team1: "Galatasaray", team2: "Bursaspor", goal1: 2, goal2: 1},
 { team1: "Galatasaray", team2: "Eskisehirspor", goal1: 2, goal2: 0},
 { team1: "Galatasaray", team2: "Fenerbahce", goal1: 3, goal2: 1},
 { team1: "Galatasaray", team2: "Gaziantepspor", goal1: 2, goal2: 4},
 { team1: "Galatasaray", team2: "Genclerbirligi", goal1: 2, goal2: 0},
 { team1: "Galatasaray", team2: "IstanbulBB", goal1: 4, goal2: 1},
 { team1: "Galatasaray", team2: "Karabukspor", goal1: 5, goal2: 1},
 { team1: "Galatasaray", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Galatasaray", team2: "Manisaspor", goal1: 1, goal2: 0},
 { team1: "Galatasaray", team2: "MersinIY", goal1: 0, goal2: 0},
 { team1: "Galatasaray", team2: "Orduspor", goal1: 2, goal2: 0},
 { team1: "Galatasaray", team2: "Samsunspor", goal1: 3, goal2: 1},
 { team1: "Galatasaray", team2: "Sivasspor", goal1: 2, goal2: 1},
 { team1: "Galatasaray", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "Gaziantepspor", team2: "Ankaragucu", goal1: 1, goal2: 0},
 { team1: "Gaziantepspor", team2: "Antalyaspor", goal1: 1, goal2: 0},
 { team1: "Gaziantepspor", team2: "Besiktas", goal1: 0, goal2: 0},
 { team1: "Gaziantepspor", team2: "Bursaspor", goal1: 2, goal2: 2},
 { team1: "Gaziantepspor", team2: "Eskisehirspor", goal1: 0, goal2: 1},
 { team1: "Gaziantepspor", team2: "Fenerbahce", goal1: 1, goal2: 3},
 { team1: "Gaziantepspor", team2: "Galatasaray", goal1: 1, goal2: 2},
 { team1: "Gaziantepspor", team2: "Genclerbirligi", goal1: 3, goal2: 0},
 { team1: "Gaziantepspor", team2: "IstanbulBB", goal1: 5, goal2: 0},
 { team1: "Gaziantepspor", team2: "Karabukspor", goal1: 3, goal2: 0},
 { team1: "Gaziantepspor", team2: "Kayserispor", goal1: 1, goal2: 2},
 { team1: "Gaziantepspor", team2: "Manisaspor", goal1: 1, goal2: 1},
 { team1: "Gaziantepspor", team2: "MersinIY", goal1: 1, goal2: 0},
 { team1: "Gaziantepspor", team2: "Orduspor", goal1: 1, goal2: 0},
 { team1: "Gaziantepspor", team2: "Samsunspor", goal1: 1, goal2: 0},
 { team1: "Gaziantepspor", team2: "Sivasspor", goal1: 2, goal2: 1},
 { team1: "Gaziantepspor", team2: "Trabzonspor", goal1: 0, goal2: 1},
 { team1: "Genclerbirligi", team2: "Ankaragucu", goal1: 1, goal2: 1},
 { team1: "Genclerbirligi", team2: "Antalyaspor", goal1: 3, goal2: 0},
 { team1: "Genclerbirligi", team2: "Besiktas", goal1: 4, goal2: 2},
 { team1: "Genclerbirligi", team2: "Bursaspor", goal1: 2, goal2: 2},
 { team1: "Genclerbirligi", team2: "Eskisehirspor", goal1: 2, goal2: 1},
 { team1: "Genclerbirligi", team2: "Fenerbahce", goal1: 0, goal2: 0},
 { team1: "Genclerbirligi", team2: "Galatasaray", goal1: 0, goal2: 1},
 { team1: "Genclerbirligi", team2: "Gaziantepspor", goal1: 1, goal2: 0},
 { team1: "Genclerbirligi", team2: "IstanbulBB", goal1: 4, goal2: 0},
 { team1: "Genclerbirligi", team2: "Karabukspor", goal1: 2, goal2: 1},
 { team1: "Genclerbirligi", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Genclerbirligi", team2: "Manisaspor", goal1: 3, goal2: 0},
 { team1: "Genclerbirligi", team2: "MersinIY", goal1: 1, goal2: 2},
 { team1: "Genclerbirligi", team2: "Orduspor", goal1: 3, goal2: 1},
 { team1: "Genclerbirligi", team2: "Samsunspor", goal1: 1, goal2: 1},
 { team1: "Genclerbirligi", team2: "Sivasspor", goal1: 3, goal2: 3},
 { team1: "Genclerbirligi", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "IstanbulBB", team2: "Ankaragucu", goal1: 3, goal2: 0},
 { team1: "IstanbulBB", team2: "Antalyaspor", goal1: 4, goal2: 0},
 { team1: "IstanbulBB", team2: "Besiktas", goal1: 2, goal2: 2},
 { team1: "IstanbulBB", team2: "Bursaspor", goal1: 0, goal2: 0},
 { team1: "IstanbulBB", team2: "Eskisehirspor", goal1: 2, goal2: 2},
 { team1: "IstanbulBB", team2: "Fenerbahce", goal1: 3, goal2: 2},
 { team1: "IstanbulBB", team2: "Galatasaray", goal1: 2, goal2: 0},
 { team1: "IstanbulBB", team2: "Gaziantepspor", goal1: 3, goal2: 1},
 { team1: "IstanbulBB", team2: "Genclerbirligi", goal1: 1, goal2: 0},
 { team1: "IstanbulBB", team2: "Karabukspor", goal1: 2, goal2: 2},
 { team1: "IstanbulBB", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "IstanbulBB", team2: "Manisaspor", goal1: 3, goal2: 2},
 { team1: "IstanbulBB", team2: "MersinIY", goal1: 0, goal2: 0},
 { team1: "IstanbulBB", team2: "Orduspor", goal1: 1, goal2: 1},
 { team1: "IstanbulBB", team2: "Samsunspor", goal1: 3, goal2: 0},
 { team1: "IstanbulBB", team2: "Sivasspor", goal1: 1, goal2: 1},
 { team1: "IstanbulBB", team2: "Trabzonspor", goal1: 0, goal2: 2},
 { team1: "Karabukspor", team2: "Ankaragucu", goal1: 3, goal2: 2},
 { team1: "Karabukspor", team2: "Antalyaspor", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "Besiktas", goal1: 1, goal2: 1},
 { team1: "Karabukspor", team2: "Bursaspor", goal1: 3, goal2: 1},
 { team1: "Karabukspor", team2: "Eskisehirspor", goal1: 1, goal2: 2},
 { team1: "Karabukspor", team2: "Fenerbahce", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "Galatasaray", goal1: 1, goal2: 1},
 { team1: "Karabukspor", team2: "Gaziantepspor", goal1: 0, goal2: 0},
 { team1: "Karabukspor", team2: "Genclerbirligi", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "IstanbulBB", goal1: 2, goal2: 0},
 { team1: "Karabukspor", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Karabukspor", team2: "Manisaspor", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "MersinIY", goal1: 3, goal2: 5},
 { team1: "Karabukspor", team2: "Orduspor", goal1: 1, goal2: 2},
 { team1: "Karabukspor", team2: "Samsunspor", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "Sivasspor", goal1: 2, goal2: 1},
 { team1: "Karabukspor", team2: "Trabzonspor", goal1: 2, goal2: 1},
 { team1: "Kayserispor", team2: "Ankaragucu", goal1: 3, goal2: 0},
 { team1: "Kayserispor", team2: "Antalyaspor", goal1: 0, goal2: 1},
 { team1: "Kayserispor", team2: "Besiktas", goal1: 1, goal2: 0},
 { team1: "Kayserispor", team2: "Bursaspor", goal1: 0, goal2: 2},
 { team1: "Kayserispor", team2: "Eskisehirspor", goal1: 2, goal2: 2},
 { team1: "Kayserispor", team2: "Fenerbahce", goal1: 0, goal2: 1},
 { team1: "Kayserispor", team2: "Galatasaray", goal1: 0, goal2: 2},
 { team1: "Kayserispor", team2: "Gaziantepspor", goal1: 1, goal2: 1},
 { team1: "Kayserispor", team2: "Genclerbirligi", goal1: 2, goal2: 3},
 { team1: "Kayserispor", team2: "IstanbulBB", goal1: 1, goal2: 0},
 { team1: "Kayserispor", team2: "Karabukspor", goal1: 2, goal2: 0},
 { team1: "Kayserispor", team2: "Manisaspor", goal1: 2, goal2: 0},
 { team1: "Kayserispor", team2: "MersinIY", goal1: 2, goal2: 2},
 { team1: "Kayserispor", team2: "Orduspor", goal1: 1, goal2: 0},
 { team1: "Kayserispor", team2: "Samsunspor", goal1: 2, goal2: 0},
 { team1: "Kayserispor", team2: "Sivasspor", goal1: 6, goal2: 2},
 { team1: "Kayserispor", team2: "Trabzonspor", goal1: 3, goal2: 3},
 { team1: "Manisaspor", team2: "Ankaragucu", goal1: 2, goal2: 0},
 { team1: "Manisaspor", team2: "Antalyaspor", goal1: 1, goal2: 0},
 { team1: "Manisaspor", team2: "Besiktas", goal1: 1, goal2: 4},
 { team1: "Manisaspor", team2: "Bursaspor", goal1: 1, goal2: 3},
 { team1: "Manisaspor", team2: "Eskisehirspor", goal1: 2, goal2: 3},
 { team1: "Manisaspor", team2: "Fenerbahce", goal1: 1, goal2: 2},
 { team1: "Manisaspor", team2: "Galatasaray", goal1: 0, goal2: 4},
 { team1: "Manisaspor", team2: "Gaziantepspor", goal1: 0, goal2: 3},
 { team1: "Manisaspor", team2: "Genclerbirligi", goal1: 0, goal2: 1},
 { team1: "Manisaspor", team2: "IstanbulBB", goal1: 0, goal2: 2},
 { team1: "Manisaspor", team2: "Karabukspor", goal1: 2, goal2: 1},
 { team1: "Manisaspor", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Manisaspor", team2: "MersinIY", goal1: 2, goal2: 0},
 { team1: "Manisaspor", team2: "Orduspor", goal1: 0, goal2: 0},
 { team1: "Manisaspor", team2: "Samsunspor", goal1: 1, goal2: 1},
 { team1: "Manisaspor", team2: "Sivasspor", goal1: 1, goal2: 3},
 { team1: "Manisaspor", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "MersinIY", team2: "Ankaragucu", goal1: 1, goal2: 2},
 { team1: "MersinIY", team2: "Antalyaspor", goal1: 0, goal2: 2},
 { team1: "MersinIY", team2: "Besiktas", goal1: 0, goal2: 1},
 { team1: "MersinIY", team2: "Bursaspor", goal1: 1, goal2: 3},
 { team1: "MersinIY", team2: "Eskisehirspor", goal1: 0, goal2: 0},
 { team1: "MersinIY", team2: "Fenerbahce", goal1: 1, goal2: 2},
 { team1: "MersinIY", team2: "Galatasaray", goal1: 1, goal2: 3},
 { team1: "MersinIY", team2: "Gaziantepspor", goal1: 2, goal2: 0},
 { team1: "MersinIY", team2: "Genclerbirligi", goal1: 2, goal2: 1},
 { team1: "MersinIY", team2: "IstanbulBB", goal1: 2, goal2: 0},
 { team1: "MersinIY", team2: "Karabukspor", goal1: 0, goal2: 2},
 { team1: "MersinIY", team2: "Kayserispor", goal1: 1, goal2: 2},
 { team1: "MersinIY", team2: "Manisaspor", goal1: 0, goal2: 0},
 { team1: "MersinIY", team2: "Orduspor", goal1: 1, goal2: 0},
 { team1: "MersinIY", team2: "Samsunspor", goal1: 1, goal2: 0},
 { team1: "MersinIY", team2: "Sivasspor", goal1: 1, goal2: 5},
 { team1: "MersinIY", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "Orduspor", team2: "Ankaragucu", goal1: 2, goal2: 0},
 { team1: "Orduspor", team2: "Antalyaspor", goal1: 3, goal2: 2},
 { team1: "Orduspor", team2: "Besiktas", goal1: 1, goal2: 1},
 { team1: "Orduspor", team2: "Bursaspor", goal1: 1, goal2: 1},
 { team1: "Orduspor", team2: "Eskisehirspor", goal1: 2, goal2: 1},
 { team1: "Orduspor", team2: "Fenerbahce", goal1: 1, goal2: 1},
 { team1: "Orduspor", team2: "Galatasaray", goal1: 0, goal2: 2},
 { team1: "Orduspor", team2: "Gaziantepspor", goal1: 0, goal2: 0},
 { team1: "Orduspor", team2: "Genclerbirligi", goal1: 0, goal2: 0},
 { team1: "Orduspor", team2: "IstanbulBB", goal1: 1, goal2: 0},
 { team1: "Orduspor", team2: "Karabukspor", goal1: 3, goal2: 2},
 { team1: "Orduspor", team2: "Kayserispor", goal1: 1, goal2: 0},
 { team1: "Orduspor", team2: "Manisaspor", goal1: 1, goal2: 0},
 { team1: "Orduspor", team2: "MersinIY", goal1: 0, goal2: 1},
 { team1: "Orduspor", team2: "Samsunspor", goal1: 0, goal2: 0},
 { team1: "Orduspor", team2: "Sivasspor", goal1: 1, goal2: 2},
 { team1: "Orduspor", team2: "Trabzonspor", goal1: 0, goal2: 0},
 { team1: "Samsunspor", team2: "Ankaragucu", goal1: 2, goal2: 2},
 { team1: "Samsunspor", team2: "Antalyaspor", goal1: 1, goal2: 0},
 { team1: "Samsunspor", team2: "Besiktas", goal1: 1, goal2: 1},
 { team1: "Samsunspor", team2: "Bursaspor", goal1: 0, goal2: 3},
 { team1: "Samsunspor", team2: "Eskisehirspor", goal1: 3, goal2: 1},
 { team1: "Samsunspor", team2: "Fenerbahce", goal1: 3, goal2: 1},
 { team1: "Samsunspor", team2: "Galatasaray", goal1: 2, goal2: 4},
 { team1: "Samsunspor", team2: "Gaziantepspor", goal1: 0, goal2: 0},
 { team1: "Samsunspor", team2: "Genclerbirligi", goal1: 3, goal2: 2},
 { team1: "Samsunspor", team2: "IstanbulBB", goal1: 2, goal2: 4},
 { team1: "Samsunspor", team2: "Karabukspor", goal1: 0, goal2: 0},
 { team1: "Samsunspor", team2: "Kayserispor", goal1: 0, goal2: 1},
 { team1: "Samsunspor", team2: "Manisaspor", goal1: 1, goal2: 2},
 { team1: "Samsunspor", team2: "MersinIY", goal1: 2, goal2: 0},
 { team1: "Samsunspor", team2: "Orduspor", goal1: 2, goal2: 0},
 { team1: "Samsunspor", team2: "Sivasspor", goal1: 1, goal2: 2},
 { team1: "Samsunspor", team2: "Trabzonspor", goal1: 1, goal2: 1},
 { team1: "Sivasspor", team2: "Ankaragucu", goal1: 3, goal2: 0},
 { team1: "Sivasspor", team2: "Antalyaspor", goal1: 2, goal2: 1},
 { team1: "Sivasspor", team2: "Besiktas", goal1: 1, goal2: 1},
 { team1: "Sivasspor", team2: "Bursaspor", goal1: 3, goal2: 0},
 { team1: "Sivasspor", team2: "Eskisehirspor", goal1: 0, goal2: 4},
 { team1: "Sivasspor", team2: "Fenerbahce", goal1: 2, goal2: 0},
 { team1: "Sivasspor", team2: "Galatasaray", goal1: 0, goal2: 4},
 { team1: "Sivasspor", team2: "Gaziantepspor", goal1: 0, goal2: 0},
 { team1: "Sivasspor", team2: "Genclerbirligi", goal1: 1, goal2: 1},
 { team1: "Sivasspor", team2: "IstanbulBB", goal1: 0, goal2: 1},
 { team1: "Sivasspor", team2: "Karabukspor", goal1: 3, goal2: 0},
 { team1: "Sivasspor", team2: "Kayserispor", goal1: 1, goal2: 1},
 { team1: "Sivasspor", team2: "Manisaspor", goal1: 2, goal2: 2},
 { team1: "Sivasspor", team2: "MersinIY", goal1: 1, goal2: 0},
 { team1: "Sivasspor", team2: "Orduspor", goal1: 1, goal2: 1},
 { team1: "Sivasspor", team2: "Samsunspor", goal1: 3, goal2: 2},
 { team1: "Sivasspor", team2: "Trabzonspor", goal1: 2, goal2: 2},
 { team1: "Trabzonspor", team2: "Ankaragucu", goal1: 3, goal2: 2},
 { team1: "Trabzonspor", team2: "Antalyaspor", goal1: 2, goal2: 2},
 { team1: "Trabzonspor", team2: "Besiktas", goal1: 0, goal2: 1},
 { team1: "Trabzonspor", team2: "Bursaspor", goal1: 2, goal2: 1},
 { team1: "Trabzonkspor", goal1: 3, goal2: 1},
 { team1: "Trabzonspor", team2: "Kayserispor", goal1: 2, goal2: 1},
 { team1: "Trabzonspor", team2: "Manisaspor", goal1: 2, goal2: 1},
 { team1: "Trabzonspor", team2: "MersinIY", goal1: 2, goal2: 3},
 { team1: "Trabzonspor", team2: "Ordusspor", team2: "Eskisehirspor", goal1: 4, goal2: 1},
 { team1: "Trabzonspor", team2: "Fenerbahce", goal1: 1, goal2: 1},
 { team1: "Trabzonspor", team2: "Galatasaray", goal1: 0, goal2: 3},
 { team1: "Trabzonspor", team2: "Gaziantepspor", goal1: 4, goal2: 0},
 { team1: "Trabzonspor", team2: "Genclerbirligi", goal1: 1, goal2: 2},
 { team1: "Trabzonspor", team2: "IstanbulBB", goal1: 0, goal2: 1},
 { team1: "Trabzonspor", team2: "Karabupor", goal1: 4, goal2: 1},
 { team1: "Trabzonspor", team2: "Samsunspor", goal1: 4, goal2: 0},
 { team1: "Trabzonspor", team2: "Sivasspor", goal1: 2, goal2: 1}
] ;
	
  function main() {
	
}
function readteam(){
	var read=prompt("hangi takım statigi ?  :","");
	probability(read);
}
function probability(team){
	var all = 0;
	var home =0;
	var away =0;
	var ties =0;
	for(i = 0;i<matches.length;i++){
		if(matches[i].team1 ==team&&matches[i].goal1>matches[i].goal2){
			 home++;
			 all++;		
		}
		if(matches[i].team2 ==team&&matches[i].goal2>matches[i].goal1){
			 away++;
			all++;
		}
		if((matches[i].team2 ==team||matches[i].team1 ==team)&&matches[i].goal2==matches[i].goal1){
			 ties++;
			all++;
		}
		
	}
	var homestat = home/all;
	var awaystat = away/all; 
	var tiestat = ties/all;
	print("Homestat :"+homestat*100+" Awaystat :"+awaystat*100 +" Drawstat :"+tiestat*100 );
	
	}
	
function	MostGoalallTeam(){
	b = matches[0].goal1+matches[0].goal2;
	for(i = 1;i<matches.length;i++){
	if((matches[i].goal1+matches[i].goal2)>b){
			b = matches[i].goal1+matches[i].goal2;}
}
for(i = 0;i<matches.length;i++){
if((matches[i].goal1+matches[i].goal2)== b){
			print(matches[i].team1 +"   "+matches[i].goal1 +" - "+matches[i].goal2+"   "+matches[i].team2);
		}
}}

	function readOneteam(){
	var read=prompt("hangi takım statigi ?  :","");
	MostGoalOneTeam(read);
}
	function MostGoalOneTeam(team1){
	 b = 0;
	 for(i = 0;i<matches.length;i++){
		if((matches[i].goal1+matches[i].goal2)>b&&(matches[i].team1 == team1||matches[i].team2 == team1)){
			b = matches[i].goal1+matches[i].goal2;}
	 }
	 for(i = 0;i<matches.length;i++){
		if((matches[i].goal1+matches[i].goal2)== b&&(matches[i].team1 == team1||matches[i].team2 == team1)){
			print(matches[i].team1 +"   "+matches[i].goal1 +" - "+matches[i].goal2+"   "+matches[i].team2);
		}
	 }
	}
	function readTeamDiff(){
	var read=prompt("Hangi takım  ?  :","");
	var read1=prompt("istediginiz fark sayısınını giriniz  ?  :","");
	GoalDiff(read,read1);
}
	function GoalDiff(team,difference){
	for(i = 0;i<matches.length;i++){
		if((matches[i].team1 == team ) && ((matches[i].goal1 - matches[i].goal2 == difference) )){
				print(matches[i].team1 +"   "+matches[i].goal1 +" - "+matches[i].goal2+"   "+matches[i].team2);
				
		}
		else if((matches[i].team2 == team ) && ((matches[i].goal2 - matches[i].goal1 == difference)  )){
				print(matches[i].team1 +"   "+matches[i].goal1 +" - "+matches[i].goal2+"   "+matches[i].team2);
				
		}
		}
	}
	function readteamStat(){
	var read=prompt("Which team ?  :","");
	TeamStats(read);
	}
	function TeamStats(team) {
	 
	 var w=l=d =point=0;
	for(i = 0;i<matches.length;i++){
		if((matches[i].team1 ==team && matches[i].goal1 > matches[i].goal2) || (matches[i].team2 ==team && matches[i].goal2 > matches[i].goal1 ))
		{
		w++;
		point=point+3;
		}
		else if ((matches[i].team1 ==team && matches[i].goal1 < matches[i].goal2) || (matches[i].team2 ==team && matches[i].goal1 > matches[i].goal2 ))
	    { l++; }
	else if ((matches[i].team1 == team && matches[i].goal1 == matches[i].goal2) || (matches[i].team2 ==team && matches[i].goal1 == matches[i].goal2 )){
	d++;
	point=point+1;
	}
	} 
	print(team  +"  Wins :" +w +"  Draws :" +d + "  Loses :" +l+ "  Point : "+ point);
	 
}	
                                                                                                      
	function pointTable(){
	for(j = 0;j<teams.length;j++){
	 var w=l=d =point=0;
	  for(i = 0;i<matches.length;i++){
		if((matches[i].team1 ==teams[j] && matches[i].goal1 > matches[i].goal2) || (matches[i].team2 ==teams[j]&& matches[i].goal2 > matches[i].goal1 ))
		{
		w++;
		point=point+3;
		}
		else if ((matches[i].team1 ==teams[j] && matches[i].goal1 < matches[i].goal2) || (matches[i].team2 ==teams[j]&& matches[i].goal1 > matches[i].goal2 ))
	    { l++; }
	    else if ((matches[i].team1 == teams[j] && matches[i].goal1 == matches[i].goal2) || (matches[i].team2 ==teams[j]&& matches[i].goal1 == matches[i].goal2 )){
	    d++;
	    point=point+1;
	}
	}
			
			print(teams[j]+"  Wins :" +w +"  Draws :" +d + "  Loses :" +l+ "  Point : "+ point);
}
}

	function readOneTeamAllMatch(){
	var read=prompt("Which team ?  :","");
	OneTeamAllMatch(read);
	}
	function OneTeamAllMatch(team){
	for(i=0; i<matches.length;i++){
	    if(matches[i].team1 == team || matches[i].team2==team)
           print(matches[i].team1+ ": " + matches[i].goal1+ " - " +matches[i].team2+ ": " + matches[i].goal2 );
	}}
	function readSamescore(){
	var read=prompt("1. takımı giriniz? :","");
	var read1=prompt("2. takımı giriniz? :","");
	SameScore(read,read1)
	}
	function SameScore(t1,t3){
	for(i=0;i<matches.length;i++){
		t1=matches[i].team1;//home1
		t2=matches[i].team2;//away1
		g1=matches[i].goal1;//goal1 for home1
		g2=matches[i].goal2;//goal2 for away1
		for(j=0;j<matches.length;j++){
		
		t3=matches[j].team1;//home2
		t4=matches[j].team1;//away2
		
		g3=matches[j].goal1;//goal1 for home2
		g1=matches[j].goal2;//goal2 for away2
		if((t1==t3&&g1==g3&&g2==g4)||(t1==t4&&g1==g4&&g2==g3)||
		  (t2==t3&&g2==g3&&g1==g4)||(t2==t4&&g2==g4&&g1==g3))
		print(matches[i]+"same"+matches[j]);
	}}
	}
	