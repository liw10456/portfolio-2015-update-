angular.module('myportfolio', []).controller('namesCtrl', function($scope) {
    $scope.projects = [
     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/F%23_InMAC_642X350_v3.jpg',	
	   title:'F# Music. Advertising',
       tags:['Persona Research', 'Wireframe Creation'],
       button:'Read More',
       link:'efsharp.html'
     },
     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/HSP_InMAC_642X350_v3.jpg',
	   title:'Human Spectrum Project',
       tags:['Persona Research', 'Front-End Development', 'User Testing'],
       button:'Read More',
       link:'hsp.html'
     },

     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/AMEX_InMAC_642X350_v3.jpg',
	   title:'American Express + Barclays Center',
       tags:['Branding','UI/UX Design','User Testing'],
       button:'Read More',
       link:'barclaycenter.html'
     },

     { image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/Busker_InMAC_642X350_v3.jpg',
	   title:'Busker',
       tags:['Branding','UI/UX Design'],
       button:'Read More',
       link:'busker.html'
     },

     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/TKTS_InMAC_642X350_v3.jpg',
	   title:'TKTS Pass',
       tags:['User Experience Design','User Flow', 'Information Architecture'],
       button:'Read More',
       link:'tkts.html'
     },

     { image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/TM_InMAC_642X350_v3.jpg',
	   title:'Time Manager',
       tags:['Storyboard','User Flow', 'Site Map', 'UI/UX Design'],
       button:'Read More',
       link:'tm.html'
     },

     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/Vital_InMAC_642X350_v3.jpg',
	   title:'Vital Intel',
       tags:['Creatives', 'Front-End Development','UI/UX Design','Responsive Design'],
       button:'Read More',
       link:'vitalintel.html'
     },

     {  
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/Macy_InMAC_642X350_v3.jpg',
	   title:"Macy's",
       tags:['UX Design','Wireframe Creation'],
       button:'Read More',
       link:'macys.html'
     },

     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/GCN_InMAC_642X350_v3.jpg',
	   title:'Green Charged Network',
       tags:['Landing Page Redesign'],
       button:'Read More',
       link:'gcn.html'
     },

     { 
       image:'https://p3plcpnl0147.prod.phx3.secureserver.net:2083/cpsess7051073306/viewer/home%2fwenchingli%2fpublic_html%2fimages/CUMC_InMAC_642X350_v3.jpg',
	   title:'Columbia University Medical Center',
       tags:['Landing Page Redesign'],
       button:'Read More',
       link:'cumc.html'
     }
    ];

$scope.concepts = [

     { 
       link:'http://wenchingli.com/images/Film_icon.png', 
       title:'User observation',
       explanation:'The 4-year experiences in filmmaking enables me to deeply explore humanity, and understand its complexity. I realize that when people confront something unknown, and they only can use limited experience and knowledge to explain. Therefore, user experience design opens an door to me. Being an ux designer who was a filmmaker, I love to observe and create an better quality of usability, so that they can shortly find the content they need and easily manipulate the whole interface.'
     },
       { 
       link:'http://wenchingli.com/images/Travel_icon.png', 
       title:'Culture Differences',
       explanation:'The 4-year experiences in filmmaking enables me to deeply explore humanity, and understand its complexity. I realize that when people confront something unknown, and they only can use limited experience and knowledge to explain. Therefore, user experience design opens an door to me. Being an ux designer who was a filmmaker, I love to observe and create an better quality of usability, so that they can shortly find the content they need and easily manipulate the whole interface.'
     },
       { 
       link:'http://wenchingli.com/images/Volunteer_84x84.png', 
       title:'Volunteer Experience',
       explanation:'In 2014 Winter, some friends and I teamed up to host the biggest Taiwan Art and Design Exhibition called "Zero Boundaries" in Taipei Econemy and Culture Office in New York for 37 Taiwanese emergering designers and artists. The following were our difficuties. First, we had tight budget and could not afford advertising. Second, we were not allowed to block street and interrupt pedestrian according to regulation of Office of the Mayor, New York City. I believed that we should took advantage of the features of digital arts. Hence, we designed the very first building project as a way to promote the show. It ever was an illegal event for Office of the Mayor, however, after one-month-long communication and related supporting documents, the project became official and being confirmed. After these experiences, I believe that a successful project is based on a great teamwork, convencing and strong motivation, and flexible communication skills. Therefore, as an UX designer, I also have learned that in order to achieve the goal, providing a clear instructtion for users to understand my proposal/project, and then users can earn trust and be confident to accept it.'
     }

    



     

     ]




});





