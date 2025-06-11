//This is all filler text. Will change it later to fit my needs.
const classChanges = [
  //Beginning elements load in
  { time: 1, target:"#video-fade" , add:"visible"},
  { time: 4, target:"#header-footer" , add:"visible"},
  { time: 5, target: "#list1", add: "visible" },

  //1st Paragraph
   { time: 6.5, target:"#p1" , add:"visible"},
   { time: 6.85, target:"body", add:"redBg"}, //sometimes this doesn't work for some reason.
   { time: 6.85, target:"#header-footer", add:"redCol"},
  //Need a trigger here for image popup-moral codes
   { time: 7, target:"#red1" , remove:"hidden"},
   { time: 7, target:"body", remove:"redBg"},
   { time: 7, target:"#header-footer", remove:"redCol"},

   { time: 9, target:"#p2", add:"visible"},
   { time: 12, target:"#p3", add:"visible"},
   { time: 17, target:"#p4", add:"visible"},
   { time: 24, target:"#l1", add:"visible"},
   { time: 26, target:"#p5", add:"visible"},
   { time: 27, target:"#break1", add:"visible"},
  
   //2nd Paragraph
   { time: 28, target: "#list2", add: "visible" },
   { time: 28, target:"#p6", add:"visible"},
   //Need to add a trigger here for image popup-religious, hair
   { time: 41, target:"#p7", add:"visible"},
   { time: 46, target:"#p8", add:"visible"},
   { time: 55, target:"#l2", add:"visible"},
   { time: 56, target:"#p9", add:"visible"},
   { time: 58, target:"#break2", add:"visible"},

   //3rd Paragraph
   { time: 59, target: "#list3", add: "visible" },
   { time: 59, target:"#p10", add:"visible"},
   { time: 62, target:"#p11", add:"visible"},
   { time: 72, target:"#p12", add:"visible"},
   { time: 75, target:"#p13", add:"visible"},
   { time: 85, target:"#p14", add:"visible"},
   { time: 85.5, target:"#l3", add:"visible"},

   { time: 91, target:"#p15", add:"visible"},
   { time: 91, target:"body", add:"redBg"}, //sometimes this doesn't work for some reason.
   { time: 91, target:"#header-footer", add:"redCol"},

   { time: 91.5, target:"#red2", remove:"hidden"},
   { time: 91.5, target:"body", remove:"redBg"},
   { time: 91.5, target:"#header-footer", remove:"redCol"},
   { time: 93, target:"#break3", add:"visible"},

   //4th Paragraph
   { time: 94, target: "#list4", add: "visible" },
   { time: 95, target:"#p16", add:"visible"},
   { time: 98, target:"#p17", add:"visible"},
   { time: 102, target:"#l4", add:"visible"},
   { time: 103, target:"#p18", add:"visible"},
   { time: 109, target:"#p19", add:"visible"},

   { time: 119, target:"body", add:"redBg"}, 
   { time: 119, target:"#header-footer", add:"redCol"},
   { time: 120, target:"body", remove:"redBg"}, 
   { time: 120, target:"#header-footer", remove:"redCol"},
   { time: 120, target:"#break4", add:"visible"},
   
   //5th Paragraph
   { time: 121, target: "#list5", add: "visible" },
   { time: 121, target:"#p20", add:"visible"},
   { time: 124, target:"#p21", add:"visible"},
   { time: 125, target:"#p22", add:"visible"},
   { time: 128, target:"#p23", add:"visible"},

   { time: 130, target:"#l5", add:"visible"},
   { time: 132, target:"#p24", add:"visible"},
   { time: 137, target:"#p25", add:"visible"},
   { time: 138, target:"#break5", add:"visible"},

   //6th Paragraph
   { time: 138, target:"#list6", add:"visible"},
   { time: 139, target:"#p26", add:"visible"},
   { time: 145, target:"#p27", add:"visible"},
   { time: 151, target:"#p28", add:"visible"},
   { time: 159, target:"#l6", add:"visible"},
   { time: 161, target:"#p29", add:"visible"},
   { time: 169, target:"#p30", add:"visible"},
   { time: 172, target:"#l7", add:"visible"},
   { time: 173, target:"#p31", add:"visible"},
   { time: 176, target:"#break6", add:"visible"},
   
   //7th Paragraph
   { time: 177, target:"#list7", add:"visible"},
   { time: 177, target:"#p32", add:"visible"},
   { time: 186, target:"#p33", add:"visible"},
   { time: 190, target:"#l8", add:"visible"},
   { time: 191, target:"#p34", add:"visible"},
   { time: 203, target:"#p35", add:"visible"},
   { time: 207, target:"#l9", add:"visible"},
   { time: 208, target:"#p36", add:"visible"},
   { time: 211, target:"#p37", add:"visible"},
   { time: 215, target:"#p38", add:"visible"},
   { time: 218, target:"#p39", add:"visible"},
   { time: 226, target:"#p40", add:"visible"},
   { time: 229, target:"#break7", add:"visible"},

   //8th Paragraph
   { time: 230, target:"#list8", add:"visible"},
   { time: 230, target:"#p41", add:"visible"},
   { time: 236, target:"#p42", add:"visible"},
   { time: 243, target:"#p43", add:"visible"},
   { time: 247, target:"#p44", add:"visible"},
   { time: 253, target:"#p45", add:"visible"},
   { time: 260, target:"#l10", add:"visible"},
   { time: 261, target:"#p46", add:"visible"},
   { time: 270, target:"#p47", add:"visible"},
   { time: 279, target:"#break8", add:"visible"},
   
   //9th Paragraph
   { time: 280, target:"#list9", add:"visible"},
   { time: 280, target:"#p48", add:"visible"},
   { time: 283, target:"#p49", add:"visible"},
   { time: 288, target:"#l11", add:"visible"},
   { time: 289, target:"#p50", add:"visible"},
   { time: 303, target:"#p51", add:"visible"},
   { time: 308, target:"#p52", add:"visible"},
   { time: 312, target:"#p53", add:"visible"},
   { time: 322, target:"#p54", add:"visible"},
   { time: 331, target:"#p55", add:"visible"},

   { time: 332, target:"body", add:"redBg"}, 
   { time: 332, target:"#header-footer", add:"redCol"},
   { time: 332.5, target:"body", remove:"redBg"}, 
   { time: 332.5, target:"#header-footer", remove:"redCol"},
   { time: 333, target:"#p56", add:"visible"}
];
