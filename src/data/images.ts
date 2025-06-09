export interface Image {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

const rawImages: Image[] = [
  {
    src: '/images/01_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0886.jpeg',
    alt: 'Overhead view of people interacting at a CIIIC Annual Meet-up booth with name tags and a yellow banner nearby.',
    caption:
      'Overhead view of people interacting at a CIIIC Annual Meet-up booth with name tags and a yellow banner nearby.',
  },
  {
    src: '/images/02_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0895.jpeg',
    alt: 'People at a table during the CIIIC Annual Meet-up, a woman hands out name tags at a registration desk.',
    caption:
      'People at a table during the CIIIC Annual Meet-up, a woman hands out name tags at a registration desk.',
  },
  {
    src: '/images/03_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0904.jpeg',
    alt: 'CIIIC Annual Meet-Up 2025 - Opening Session',
    caption:
      'Opening session of the CIIIC Annual Meet-Up 2025',
  },
  {
    src: '/images/04_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0915.jpeg',
    alt: 'Attendees at CIIIC Annual Meet-up view program screens and name tags in a modern venue.',
    caption:
      'Attendees at CIIIC Annual Meet-up view program screens and name tags in a modern venue.',
  },
  {
    src: '/images/05_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0923.jpeg',
    alt: 'Two people look at large screens displaying a CIIIC event program and a venue map, one person points at the map.',
    caption:
      'Two people look at large screens displaying a CIIIC event program and a venue map, one person points at the map.',
  },
  {
    src: '/images/06_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16466.jpeg',
    alt: 'Two people selecting name tags from a table next to a screen and flower arrangement at the CIIIC Annual Meet-up event.',
    caption:
      'Two people selecting name tags from a table next to a screen and flower arrangement at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/07_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16473.jpeg',
    alt: 'People at CIIIC Annual Meet-up analyzing a wall map, with name tags displayed on tables and others mingling in the background.',
    caption:
      'People at CIIIC Annual Meet-up analyzing a wall map, with name tags displayed on tables and others mingling in the background.',
  },
  {
    src: '/images/09_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16477.jpeg',
    alt: 'Attendees at the CIIIC Annual Meet-up are selecting name badges from a table in a conference hall.',
    caption:
      'Attendees at the CIIIC Annual Meet-up are selecting name badges from a table in a conference hall.',
  },
  {
    src: '/images/10_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0964.jpeg',
    alt: 'Five people networking around tables at the CIIIC Annual Meet-up; a yellow CIIIC banner is visible.',
    caption:
      'Five people networking around tables at the CIIIC Annual Meet-up; a yellow CIIIC banner is visible.',
  },
  {
    src: '/images/100_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2.jpeg',
    alt: 'A speaker presents on innovation, using a screen, to an attentive audience at the CIIIC Annual Meet-up event.',
    caption:
      'Carmen Biemond presenting on the Innovation Impact Challenge.',
  },
  {
    src: '/images/101_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2.jpeg',
    alt: 'Audience seated at CIIIC Annual Meet-up, listening to speaker presenting on innovation impact challenge at a professional event.',
    caption:
      'Audience seated at CIIIC Annual Meet-up, listening to speaker presenting on innovation impact challenge at a professional event.',
  },
  {
    src: '/images/102_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2615.jpeg',
    alt: 'Hands holding a brochure with "CIIIC" logo at a professional event.',
    caption:
      'Hands holding a brochure with "CIIIC" logo at a professional event.',
  },
  {
    src: '/images/103_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2636.jpeg',
    alt: 'Speaker presenting on Innovation Impact Challenge at CIIIC Annual Meet-up, with a large screen and audience in focus.',
    caption:
      'Speaker presenting on Innovation Impact Challenge at CIIIC Annual Meet-up, with a large screen and audience in focus.',
  },
  {
    src: '/images/104_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2651.jpeg',
    alt: 'Man speaks into a microphone at CIIIC Annual Meet-up, with three people standing in the background.',
    caption:
      'Man speaks into a microphone at CIIIC Annual Meet-up, with three people standing in the background.',
  },
  {
    src: '/images/105_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2664.jpeg',
    alt: 'Smiling person in a striped shirt holds a microphone and paper, speaking at the CIIIC Annual Meet-up event.',
    caption:
      'Smiling person in a striped shirt holds a microphone and paper, speaking at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/106_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2684.jpeg',
    alt: 'Man seated on stage with microphone, speaking to an audience at the CIIIC Annual Meet-up event. Flowers and screen visible.',
    caption:
      'Man seated on stage with microphone, speaking to an audience at the CIIIC Annual Meet-up event. Flowers and screen visible.',
  },
  {
    src: '/images/107_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2716.jpeg',
    alt: 'Man in white shirt speaking into a microphone at CIIIC Annual Meet-up. Bright background, focused on presenter.',
    caption:
      'Man in white shirt speaking into a microphone at CIIIC Annual Meet-up. Bright background, focused on presenter.',
  },
  {
    src: '/images/108_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2729.jpeg',
    alt: 'A woman in a suit speaks into a microphone at the CIIIC Annual Meet-up, standing in front of a window and a presentation screen.',
    caption:
      'A woman in a suit speaks into a microphone at the CIIIC Annual Meet-up, standing in front of a window and a presentation screen.',
  },
  {
    src: '/images/109_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2762.jpeg',
    alt: 'A woman speaks into a microphone at the CIIIC Annual Meet-up, standing in front of a presentation screen.',
    caption:
      'A woman speaks into a microphone at the CIIIC Annual Meet-up, standing in front of a presentation screen.',
  },
  {
    src: '/images/11_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16504.jpeg',
    alt: 'A group of people socializing at the CIIIC Annual Meet-up in a spacious, well-lit venue with informal networking.',
    caption:
      'A group of people socializing at the CIIIC Annual Meet-up in a spacious, well-lit venue with informal networking.',
  },
  {
    src: '/images/110_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17387.jpeg',
    alt: 'Speaker presenting at CIIIC Annual Meet-up with attendees gathered around tables in a well-lit, spacious room.',
    caption:
      'Speaker presenting at CIIIC Annual Meet-up with attendees gathered around tables in a well-lit, spacious room.',
  },
  {
    src: '/images/111_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17421.jpeg',
    alt: 'A woman presents using a screen at the CIIIC Annual Meet-up, attended by people standing and seated at cocktail tables.',
    caption:
      'A woman presents using a screen at the CIIIC Annual Meet-up, attended by people standing and seated at cocktail tables.',
  },
  {
    src: '/images/112_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2.jpeg',
    alt: 'A person uses a VR headset and controller at the CIIIC Annual Meet-up, standing in a bright room.',
    caption:
      'A person uses a VR headset and controller at the CIIIC Annual Meet-up, standing in a bright room.',
  },
  {
    src: '/images/114_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2.jpeg',
    alt: 'Person using VR headset and controllers in a brightly lit room during CIIIC Annual Meet-up; another person in background.',
    caption:
      'Person using VR headset and controllers in a brightly lit room during CIIIC Annual Meet-up; another person in background.',
  },
  {
    src: '/images/115_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17550.jpeg',
    alt: 'A person presents slides on a screen to a seated audience in a bright room during the CIIIC Annual Meet-up.',
    caption:
      'Joost van Dongen presenting to a seated audience.',
  },
  {
    src: '/images/116_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2825.jpeg',
    alt: 'Bald man with beard gestures during a presentation next to a laptop with colorful stickers at the CIIIC Annual Meet-up.',
    caption:
      'Bald man with beard gestures during a presentation next to a laptop with colorful stickers at the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/117_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2862.jpeg',
    alt: 'Sign reading "SHOW DON\'T TELL VR EXPERIENCE" at the CIIIC event, on a polka-dotted table.',
    caption:
      'Sign reading "SHOW DON\'T TELL VR EXPERIENCE" at the CIIIC event, on a polka-dotted table.',
  },
  {
    src: '/images/118_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2.jpeg',
    alt: 'A person using a VR headset and controllers in a modern kitchen at the CIIIC Annual Meet-up.',
    caption:
      'A person using a VR headset and controllers in a modern kitchen at the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/12_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0979.jpeg',
    alt: 'Group of people networking at CIIIC event, conversing and holding cups, with name tags and table with flowers.',
    caption:
      'Group of people networking at CIIIC event, conversing and holding cups, with name tags and table with flowers.',
  },
  {
    src: '/images/120_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2887.jpeg',
    alt: 'Speaker addresses attendees seated in a modern room; one person uses a VR headset in the background at the CIIIC event.',
    caption:
      'Speaker addresses attendees seated in a modern room; one person uses a VR headset in the background at the CIIIC event.',
  },
  {
    src: '/images/122_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2936.jpeg',
    alt: 'Bald man in focus with hand raised, gesturing; blurred man in background wearing VR headset at CIIIC Annual Meet-up.',
    caption:
      'Bald man in focus with hand raised, gesturing; blurred man in background wearing VR headset at CIIIC Annual Meet-up.',
  },
  {
    src: '/images/123_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2999.jpeg',
    alt: 'Person in white using VR headset and controllers at CIIIC Annual Meet-up, blurred attendees in foreground.',
    caption:
      'Person in white using VR headset and controllers at CIIIC Annual Meet-up, blurred attendees in foreground.',
  },
  {
    src: '/images/124_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3024.jpeg',
    alt: 'A woman using a virtual reality headset and controllers at the CIIIC Annual Meet-up; others converse nearby.',
    caption:
      'A woman using a virtual reality headset and controllers at the CIIIC Annual Meet-up; others converse nearby.',
  },
  {
    src: '/images/125_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3101.jpeg',
    alt: 'Man speaking at CIIIC Annual Meet-up, gesturing with hands, laptop with stickers on table.',
    caption:
      'Man speaking at CIIIC Annual Meet-up, gesturing with hands, laptop with stickers on table.',
  },
  {
    src: '/images/126_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17685.jpeg',
    alt: 'Person wearing VR headset in a modern kitchen setup at CIIIC Annual Meet-up.',
    caption:
      'Person wearing VR headset in a modern kitchen setup at CIIIC Annual Meet-up.',
  },
  {
    src: '/images/127_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17693.jpeg',
    alt: 'Person wearing a brown outfit and VR headset in a modern kitchen setting at the CIIIC Annual Meet-up event.',
    caption:
      'Person wearing a brown outfit and VR headset in a modern kitchen setting at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/128_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3139.jpeg',
    alt: 'Two people seated on stage, engaged in discussion, each holding a microphone at the CIIIC Annual Meet-up event.',
    caption:
      'Two people seated on stage, engaged in discussion, each holding a microphone at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/129_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3149.jpeg',
    alt: 'Three panelists sit on stools, engaging in discussion at the CIIIC Annual Meet-up, with a water-themed backdrop.',
    caption:
      'Three panelists sit on stools, engaging in discussion at the CIIIC Annual Meet-up, with a water-themed backdrop.',
  },
  {
    src: '/images/13_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_0990.jpeg',
    alt: 'People networking at the CIIIC Annual Meet-up, standing around tables with refreshments and displays in a bright, open space.',
    caption:
      'People networking at the CIIIC Annual Meet-up, standing around tables with refreshments and displays in a bright, open space.',
  },
  {
    src: '/images/131_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3206.jpeg',
    alt: 'Smiling woman in a black shirt standing indoors at the CIIIC Annual Meet-up, with large windows in the background.',
    caption:
      'Smiling woman in a black shirt standing indoors at the CIIIC Annual Meet-up, with large windows in the background.',
  },
  {
    src: '/images/133_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3256.jpeg',
    alt: 'Woman in patterned dress standing at CIIIC Annual Meet-up, with abstract background display.',
    caption:
      'Woman in patterned dress standing at CIIIC Annual Meet-up, with abstract background display.',
  },
  {
    src: '/images/134_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17740.jpeg',
    alt: 'Two speakers stand onstage at CIIIC Annual Meet-up with a large screen and audience in the background.',
    caption:
      'Two speakers stand onstage at CIIIC Annual Meet-up with a large screen and audience in the background.',
  },
  {
    src: '/images/136_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3279.jpeg',
    alt: 'A woman speaking and gesturing at the CIIIC Annual Meet-up event, seated in front of a screen.',
    caption:
      'A woman speaking and gesturing at the CIIIC Annual Meet-up event, seated in front of a screen.',
  },
  {
    src: '/images/137_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17771.jpeg',
    alt: 'Two speakers on stage during a panel discussion at the CIIIC Annual Meet-up, with an audience listening.',
    caption:
      'Two speakers on stage during a panel discussion at the CIIIC Annual Meet-up, with an audience listening.',
  },
  {
    src: '/images/138_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3289.jpeg',
    alt: 'Two people seated on stage at CIIIC Annual Meet-up; one gestures expressively, the other listens attentively.',
    caption:
      'Two people seated on stage at CIIIC Annual Meet-up; one gestures expressively, the other listens attentively.',
  },
  {
    src: '/images/14_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1002.jpeg',
    alt: 'Attendees at CIIIC event select name badges from a table next to a vase of colorful flowers.',
    caption:
      'Attendees at CIIIC event select name badges from a table next to a vase of colorful flowers.',
  },
  {
    src: '/images/140_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3309.jpeg',
    alt: 'Man with gray hair and glasses speaking on stage at CIIIC Annual Meet-up, wearing a blue shirt and using a headset microphone.',
    caption:
      'Man with gray hair and glasses speaking on stage at CIIIC Annual Meet-up, wearing a blue shirt and using a headset microphone.',
  },
  {
    src: '/images/142_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3361.jpeg',
    alt: 'Two people engaged in discussion at the CIIIC Annual Meet-up, with a vase of flowers in the background.',
    caption:
      'Michel van der Aa and Monique van Dusseldorp.',
  },
  {
    src: '/images/144_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3419.jpeg',
    alt: 'Man speaking passionately with hand gestures at CIIIC Annual Meet-up, floral decoration in background.',
    caption:
      'Man speaking passionately with hand gestures at CIIIC Annual Meet-up, floral decoration in background.',
  },
  {
    src: '/images/145_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17789.jpeg',
    alt: 'Audience listens to two speakers on stage with a screen in the background at the CIIIC Annual Meet-up event.',
    caption:
      'Audience listens to two speakers on stage with a screen in the background at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/146_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3450.jpeg',
    alt: 'Two speakers sit on stage during the CIIIC Annual Meet-up, engaging with an audience. Flowers decorate the area.',
    caption:
      'Two speakers sit on stage during the CIIIC Annual Meet-up, engaging with an audience. Flowers decorate the area.',
  },
  {
    src: '/images/15_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1024.jpeg',
    alt: 'A crowded conference room with attendees engaged in conversation at the CIIIC Annual Meet-up event.',
    caption:
      'A crowded conference room with attendees engaged in conversation at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/151_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3531.jpeg',
    alt: 'A woman speaks into a microphone on stage at the CIIIC Annual Meet-up, with her name and title projected behind her.',
    caption: 'Heleen Rouw',
  },
  {
    src: '/images/153_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3557.jpeg',
    alt: 'Three individuals are engaged in a panel discussion on stage, with a projected screen behind them displaying speaker images.',
    caption:
      'On stage, from left to right: Joost Raessens, Corinne Meijer, and Heleen Rouw.',
  },
  {
    src: '/images/154_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3576.jpeg',
    alt: 'Three people speaking on stage with microphones at CIIIC Annual Meet-up, audience members in foreground.',
    caption:
      'Three people speaking on stage with microphones at CIIIC Annual Meet-up, audience members in foreground.',
  },
  {
    src: '/images/156_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3605.jpeg',
    alt: 'Three people seated at the CIIIC Annual Meet-up, with one holding a microphone, discussing during a panel session.',
    caption:
      'Three people seated at the CIIIC Annual Meet-up, with one holding a microphone, discussing during a panel session.',
  },
  {
    src: '/images/158_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3608.jpeg',
    alt: 'Three panelists on stage discuss at the CIIIC Annual Meet-up. The backdrop reads, "Riding the Immersive Wave."',
    caption:
      'Three panelists on stage discuss at the CIIIC Annual Meet-up. The backdrop reads, "Riding the Immersive Wave."',
  },
  {
    src: '/images/159_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3628.jpeg',
    alt: 'Three panelists are speaking on stage at the CIIIC Annual Meet-up, with an audience seated in front of them.',
    caption:
      'Three panelists are speaking on stage at the CIIIC Annual Meet-up, with an audience seated in front of them.',
  },
  {
    src: '/images/16_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16529.jpeg',
    alt: 'Audience at CIIIC Annual Meet-up, seated and watching a presentation on a large screen in a conference room.',
    caption:
      'Audience at CIIIC Annual Meet-up, seated and watching a presentation on a large screen in a conference room.',
  },
  {
    src: '/images/160_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3650.jpeg',
    alt: 'Panelists holding microphones speak at the CIIIC Annual Meet-up, with an audience watching, under the sign "Riding the Immersive Wave".',
    caption:
      'Panelists holding microphones speak at the CIIIC Annual Meet-up, with an audience watching, under the sign "Riding the Immersive Wave".',
  },
  {
    src: '/images/161_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17852.jpeg',
    alt: 'Audience watching three speakers on stage at the CIIIC Annual Meet-up, with a large logo displayed behind them.',
    caption:
      'Audience watching three speakers on stage at the CIIIC Annual Meet-up, with a large logo displayed behind them.',
  },
  {
    src: '/images/163_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_3717.jpeg',
    alt: 'Bald man with glasses in a blue suit stands indoors at the CIIIC Annual Meet-up.',
    caption:
      'Bald man with glasses in a blue suit stands indoors at the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/165_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17862.jpeg',
    alt: 'Crowded networking area at CIIIC Annual Meet-up with attendees chatting and mingling in a bright, open room.',
    caption:
      'Crowded networking area at CIIIC Annual Meet-up with attendees chatting and mingling in a bright, open room.',
  },
  {
    src: '/images/166_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17868.jpeg',
    alt: 'Three people engage in conversation at a professional event, each holding a drink, with more attendees in the background.',
    caption:
      'Three people engage in conversation at a professional event, each holding a drink, with more attendees in the background.',
  },
  {
    src: '/images/167_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17873.jpeg',
    alt: 'Diverse group of people networking and conversing in a bright room at the CIIIC Annual Meet-up event.',
    caption:
      'Diverse group of people networking and conversing in a bright room at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/168_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17882.jpeg',
    alt: 'Two women at a networking event, smiling and holding drinks, with a busy background of people conversing.',
    caption:
      'Two women at a networking event, smiling and holding drinks, with a busy background of people conversing.',
  },
  {
    src: '/images/17_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1050.jpeg',
    alt: 'A speaker addresses an audience at the CIIIC Annual Meet-up, with a large screen displaying their name behind them.',
    caption:
      'A speaker addresses an audience at the CIIIC Annual Meet-up, with a large screen displaying their name behind them.',
  },
  {
    src: '/images/18_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1059.jpeg',
    alt: 'A speaker presents on stage at the CIIIC Annual Meet-up, addressing an audience, with flowers and empty chairs nearby.',
    caption:
      'A speaker presents on stage at the CIIIC Annual Meet-up, addressing an audience, with flowers and empty chairs nearby.',
  },
  {
    src: '/images/19_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16540.jpeg',
    alt: 'Audience at CIIIC Annual Meet-up, many raising hands, in a bright, spacious venue with large windows.',
    caption:
      'Audience at CIIIC Annual Meet-up, many raising hands, in a bright, spacious venue with large windows.',
  },
  {
    src: '/images/20_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16547.jpeg',
    alt: 'Person speaking on stage to large seated audience at CIIIC Annual Meet-up in a bright conference room.',
    caption:
      'Person speaking on stage to large seated audience at CIIIC Annual Meet-up in a bright conference room.',
  },
  {
    src: '/images/21_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1065.jpeg',
    alt: 'People seated at the CIIIC Annual Meet-up, engaged in conversations and networking in a crowded conference room.',
    caption:
      'People seated at the CIIIC Annual Meet-up, engaged in conversations and networking in a crowded conference room.',
  },
  {
    src: '/images/22_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1069.jpeg',
    alt: 'Smiling woman in a crowd, casually chatting with others at the CIIIC Annual Meet-up.',
    caption:
      'Smiling woman in a crowd, casually chatting with others at the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/23_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1076.jpeg',
    alt: 'Two men engaged in conversation at a professional event while others are seated in the background.',
    caption:
      'Two men engaged in conversation at a professional event while others are seated in the background.',
  },
  {
    src: '/images/24_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1083.jpeg',
    alt: 'Audience seated at CIIIC Annual Meet-up, focused and engaged. Front row includes diverse individuals with varying expressions.',
    caption:
      'Audience seated at CIIIC Annual Meet-up, focused and engaged. Front row includes diverse individuals with varying expressions.',
  },
  {
    src: '/images/25_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16568.jpeg',
    alt: 'Speaker presenting to an attentive audience at the CIIIC Annual Meet-up in a spacious, well-lit venue.',
    caption:
      'Speaker presenting to an attentive audience at the CIIIC Annual Meet-up in a spacious, well-lit venue.',
  },
  {
    src: '/images/26_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1088.jpeg',
    alt: 'Woman in a plaid suit speaks at a podium during a professional event, with colorful flowers in the background.',
    caption:
      'Woman in a plaid suit speaks at a podium during a professional event, with colorful flowers in the background.',
  },
  {
    src: '/images/27_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1107.jpeg',
    alt: 'Speaker Barbera  Wolfensperger at podium addressing audience at CIIIC event, with a colorful digital art display on screen behind them.',
    caption: 'Barbera Wolfensperger',
  },
  {
    src: '/images/28_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1121.jpeg',
    alt: 'A woman speaks at a podium during the CIIIC Annual Meet-up, with a colorful floral arrangement and a screen in the background.',
    caption:
      'A woman speaks at a podium during the CIIIC Annual Meet-up, with a colorful floral arrangement and a screen in the background.',
  },
  {
    src: '/images/29_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16584.jpeg',
    alt: 'Speaker addressing a large audience at the CIIIC Annual Meet-up in a bright, modern conference room.',
    caption:
      'Speaker addressing a large audience at the CIIIC Annual Meet-up in a bright, modern conference room.',
  },
  {
    src: '/images/30_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1174.jpeg',
    alt: 'A speaker addresses an audience at the CIIIC Annual Meet-up, standing beside a large screen and colorful floral arrangement.',
    caption:
      'A speaker addresses an audience at the CIIIC Annual Meet-up, standing beside a large screen and colorful floral arrangement.',
  },
  {
    src: '/images/31_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1227.jpeg',
    alt: 'A speaker presents at a podium during the CIIIC Annual Meet-up, with an audience listening attentively in a conference setting.',
    caption:
      'A speaker presents at a podium during the CIIIC Annual Meet-up, with an audience listening attentively in a conference setting.',
  },
  {
    src: '/images/32_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16614.jpeg',
    alt: 'Speaker presents on stage to an audience at the CIIIC Annual Meet-up, with a large screen displaying a colorful slide.',
    caption:
      'Speaker presents on stage to an audience at the CIIIC Annual Meet-up, with a large screen displaying a colorful slide.',
  },
  {
    src: '/images/33_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1311.jpeg',
    alt: 'Man in a cap and blazer speaking on stage at CIIIC Annual Meet-up, smiling at the audience.',
    caption: 'Jeremy Dalton',
  },
  {
    src: '/images/34_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1393.jpeg',
    alt: 'Two seated speakers at the CIIIC Annual Meet-up, one holding notes, the other raising a hand, engaged in discussion.',
    caption:
      'Two seated speakers at the CIIIC Annual Meet-up, one holding notes, the other raising a hand, engaged in discussion.',
  },
  {
    src: '/images/35_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16638.jpeg',
    alt: 'Audience attentively attending a presentation at the CIIIC Annual Meet-up, with speakers on stage near a screen.',
    caption:
      'Audience attentively attending a presentation at the CIIIC Annual Meet-up, with speakers on stage near a screen.',
  },
  {
    src: '/images/36_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1429.jpeg',
    alt: 'Speakers present at CIIIC Annual Meet-up with audience seated, a graph on screen, and floral arrangement on stage.',
    caption:
      'Speakers present at CIIIC Annual Meet-up with audience seated, a graph on screen, and floral arrangement on stage.',
  },
  {
    src: '/images/37_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16644.jpeg',
    alt: 'Audience sitting as a speaker presents slides at the CIIIC Annual Meet-up event in a large room.',
    caption:
      'Audience sitting as a speaker presents slides at the CIIIC Annual Meet-up event in a large room.',
  },
  {
    src: '/images/38_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16655.jpeg',
    alt: 'Close-up of a person holding a pen with a notepad on their lap, containing handwritten notes at a professional event.',
    caption:
      'Close-up of a person holding a pen with a notepad on their lap, containing handwritten notes at a professional event.',
  },
  {
    src: '/images/39_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16677.jpeg',
    alt: 'A speaker presents on stage to a seated audience at the CIIIC Annual Meet-up, with a large screen displaying slides.',
    caption:
      'A speaker presents on stage to a seated audience at the CIIIC Annual Meet-up, with a large screen displaying slides.',
  },
  {
    src: '/images/40_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16684.jpeg',
    alt: 'Speaker presents on stage to an attentive seated audience at the CIIIC Annual Meet-up in a bright conference room.',
    caption: 'Heleen Rouw',
  },
  {
    src: '/images/41_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1566.jpeg',
    alt: 'Speaker addresses audience at CIIIC Annual Meet-up, large screen showing Advisory Board group photo in background.',
    caption: 'Heleen Rouw',
  },
  {
    src: '/images/42_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1604.jpeg',
    alt: 'Woman speaking at a podium with a microphone at the CIIIC Annual Meet-up event, colorful flowers in the background.',
    caption:
      'Woman speaking at a podium with a microphone at the CIIIC Annual Meet-up event, colorful flowers in the background.',
  },
  {
    src: '/images/43_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16698.jpeg',
    alt: "Rows of Tony's Chocolonely bars with CIIIC branding on colorful background at the CIIIC Annual Meet-up event.",
    caption:
      "Rows of Tony's Chocolonely bars with CIIIC branding on colorful background at the CIIIC Annual Meet-up event.",
  },
  {
    src: '/images/45_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16718.jpeg',
    alt: 'Speaker presenting to a seated audience at the CIIIC Annual Meet-up, attendees listening attentively in a bright room.',
    caption:
      'Speaker presenting to a seated audience at the CIIIC Annual Meet-up, attendees listening attentively in a bright room.',
  },
  {
    src: '/images/46_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1620.jpeg',
    alt: 'Woman presenting at CIIIC Annual Meet-up, gesturing with hands, standing near a screen in a bright room.',
    caption:
      'Woman presenting at CIIIC Annual Meet-up, gesturing with hands, standing near a screen in a bright room.',
  },
  {
    src: '/images/47_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16734.jpeg',
    alt: 'A woman presents on stage to a seated audience at the CIIIC Annual Meet-up; screens display presentation slides.',
    caption:
      'A woman presents on stage to a seated audience at the CIIIC Annual Meet-up; screens display presentation slides.',
  },
  {
    src: '/images/48_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16774.jpeg',
    alt: 'A woman presents to a seated audience at the CIIIC Annual Meet-up, with a screen displaying "Friend or Enemy?" in the background.',
    caption:
      'A woman presents to a seated audience at the CIIIC Annual Meet-up, with a screen displaying "Friend or Enemy?" in the background.',
  },
  {
    src: '/images/49_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16830.jpeg',
    alt: 'Two men sitting on stools wearing virtual reality headsets at the CIIIC Annual Meet-up event.',
    caption:
      'Two men sitting on stools wearing virtual reality headsets at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/50_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16836.jpeg',
    alt: 'Two people wearing VR headsets sit in a meeting area with small, labeled bottles on a table in the foreground.',
    caption:
      'Two people wearing VR headsets sit in a meeting area with small, labeled bottles on a table in the foreground.',
  },
  {
    src: '/images/51_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16858.jpeg',
    alt: 'Three people seated wearing VR headsets during the CIIIC Annual Meet-up, engaging in a virtual experience.',
    caption:
      'Three people seated wearing VR headsets during the CIIIC Annual Meet-up, engaging in a virtual experience.',
  },
  {
    src: '/images/52_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16896.jpeg',
    alt: 'Three people wearing VR headsets sit on stools in a well-lit room during the CIIIC Annual Meet-up event.',
    caption:
      'Three people wearing VR headsets sit on stools in a well-lit room during the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/53_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16919.jpeg',
    alt: 'A facilitator holds colored cards while four seated participants wear VR headsets during a CIIIC Annual Meet-up session.',
    caption:
      'A facilitator holds colored cards while four seated participants wear VR headsets during a CIIIC Annual Meet-up session.',
  },
  {
    src: '/images/54_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16954.jpeg',
    alt: 'A person at the CIIIC Annual Meet-up views a smartphone displaying a colorful digital figure.',
    caption:
      'A person at the CIIIC Annual Meet-up views a smartphone displaying a colorful digital figure.',
  },
  {
    src: '/images/55_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16963.jpeg',
    alt: 'Man at event watching a video on his phone, with another person taking a photo in the background.',
    caption:
      'Man at event watching a video on his phone, with another person taking a photo in the background.',
  },
  {
    src: '/images/56_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_16966.jpeg',
    alt: 'Man at CIIIC event holds phone, displaying a photo, while seated in a bright room with people mingling in the background.',
    caption:
      'Man at CIIIC event holds phone, displaying a photo, while seated in a bright room with people mingling in the background.',
  },
  {
    src: '/images/57_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1687.jpeg',
    alt: 'A woman in a VR headset talks to another woman at a professional event near large windows.',
    caption:
      'A woman in a VR headset talks to another woman at a professional event near large windows.',
  },
  {
    src: '/images/58_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1726.jpeg',
    alt: 'Two women at CIIIC event; one wearing a VR headset, holding a controller, the other observing.',
    caption:
      'Two women at CIIIC event; one wearing a VR headset, holding a controller, the other observing.',
  },
  {
    src: '/images/59_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1780.jpeg',
    alt: 'People sitting in a casual meeting area during the CIIIC Annual Meet-up, engaging with their phones and in conversation.',
    caption:
      'People sitting in a casual meeting area during the CIIIC Annual Meet-up, engaging with their phones and in conversation.',
  },
  {
    src: '/images/60_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1826.jpeg',
    alt: 'Woman wearing VR headset and holding a controller, engaged in a demonstration at the CIIIC Annual Meet-up event.',
    caption:
      'Woman wearing VR headset and holding a controller, engaged in a demonstration at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/61_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1836.jpeg',
    alt: 'Man in red shirt using VR headset with controller at CIIIC Annual Meet-up.',
    caption:
      'Man in red shirt using VR headset with controller at CIIIC Annual Meet-up.',
  },
  {
    src: '/images/62_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17036.jpeg',
    alt: 'People networking around tall tables at CIIIC Annual Meet-up, with a screen displaying information in the background.',
    caption:
      'People networking around tall tables at CIIIC Annual Meet-up, with a screen displaying information in the background.',
  },
  {
    src: '/images/63_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1881.jpeg',
    alt: 'People converse near a presentation slide on XR data analysis at the CIIIC Annual Meet-up.',
    caption:
      'People converse near a presentation slide on XR data analysis at the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/64_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17065.jpeg',
    alt: 'Four people writing on sticky notes at a round table during the CIIIC Annual Meet-up event.',
    caption:
      'Four people writing on sticky notes at a round table during the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/65_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17074.jpeg',
    alt: 'Three women engage in discussion around a high table at the CIIIC Annual Meet-up event, with supplies scattered on the table.',
    caption:
      'Three women engage in discussion around a high table at the CIIIC Annual Meet-up event, with supplies scattered on the table.',
  },
  {
    src: '/images/66_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17110.jpeg',
    alt: 'Three men engaged in discussion around a table with sticky notes at the CIIIC Annual Meet-up event.',
    caption:
      'Three men engaged in discussion around a table with sticky notes at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/67_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1902.jpeg',
    alt: 'Three people engaged in discussion at a round table during the CIIIC Annual Meet-up, with colorful panels in the background.',
    caption:
      'Three people engaged in discussion at a round table during the CIIIC Annual Meet-up, with colorful panels in the background.',
  },
  {
    src: '/images/68_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17125.jpeg',
    alt: 'People networking and talking around tall cocktail tables at the CIIIC Annual Meet-up, with colorful wall art in the background.',
    caption:
      'People networking and talking around tall cocktail tables at the CIIIC Annual Meet-up, with colorful wall art in the background.',
  },
  {
    src: '/images/69_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1908.jpeg',
    alt: 'Person in striped shirt hands a microphone to an attendee in a crowded conference room with speakers on stage.',
    caption:
      'Person in striped shirt hands a microphone to an attendee in a crowded conference room with speakers on stage.',
  },
  {
    src: '/images/70_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_1946.jpeg',
    alt: 'Four panelists on stage speak at CIIIC Annual Meet-up; audience members watch attentively.',
    caption:
      'Four panelists on stage speak at CIIIC Annual Meet-up; audience members watch attentively.',
  },
  {
    src: '/images/71_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17150.jpeg',
    alt: 'Audience seated, watching a panel discussion on stage at the CIIIC Annual Meet-up event, with a large screen in the background.',
    caption:
      'Audience seated, watching a panel discussion on stage at the CIIIC Annual Meet-up event, with a large screen in the background.',
  },
  {
    src: '/images/72_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2025.jpeg',
    alt: 'Audience listening to a speaker in blue at CIIIC Annual Meet-up; screen displays "Questions?" in a bright room.',
    caption:
      'Audience listening to a speaker in blue at CIIIC Annual Meet-up; screen displays "Questions?" in a bright room.',
  },
  {
    src: '/images/73_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2051.jpeg',
    alt: 'Participant in blue shirt stands with a name tag, gesturing, while another raises a hand during the CIIIC Annual Meet-up.',
    caption:
      'Participant in blue shirt stands with a name tag, gesturing, while another raises a hand during the CIIIC Annual Meet-up.',
  },
  {
    src: '/images/74_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17190.jpeg',
    alt: 'Audience members seated at the CIIIC Annual Meet-up while a presenter speaks with a visual display behind them.',
    caption:
      'Audience members seated at the CIIIC Annual Meet-up while a presenter speaks with a visual display behind them.',
  },
  {
    src: '/images/75_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2075.jpeg',
    alt: 'A woman holds a microphone, standing among seated attendees at the CIIIC Annual Meet-up event.',
    caption:
      'A woman holds a microphone, standing among seated attendees at the CIIIC Annual Meet-up event.',
  },
  {
    src: '/images/76_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2124.jpeg',
    alt: 'Attendees seated and taking notes during a professional meet-up, with one person holding a microphone.',
    caption:
      'Attendees seated and taking notes during a professional meet-up, with one person holding a microphone.',
  },
  {
    src: '/images/77_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17195.jpeg',
    alt: 'Audience seated in a bright room at the CIIIC Annual Meet-up, with a speaker presenting near a large window.',
    caption: 'Audience listening to Isjah Koppejan.',
  },
  {
    src: '/images/78_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17214.jpeg',
    alt: 'A conference attendee speaks into a microphone held by a presenter at the CIIIC Annual Meet-up, surrounded by seated participants.',
    caption:
      'A conference attendee speaks into a microphone held by a presenter at the CIIIC Annual Meet-up, surrounded by seated participants.',
  },
  {
    src: '/images/79_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17221.jpeg',
    alt: 'Man in a suit holds a microphone for a seated woman taking notes at CIIIC Annual Meet-up, with attendees in the background.',
    caption:
      'Man in a suit holds a microphone for a seated woman taking notes at CIIIC Annual Meet-up, with attendees in the background.',
  },
  {
    src: '/images/80_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17240.jpeg',
    alt: 'Audience listens to a speaker at the CIIIC Annual Meet-up, with a screen displaying "Questions?" in a modern office.',
    caption:
      'Audience listens to a speaker at the CIIIC Annual Meet-up, with a screen displaying "Questions?" in a modern office.',
  },
  {
    src: '/images/81_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2132.jpeg',
    alt: 'Three men engaged in conversation at CIIIC Annual Meet-up, with one man holding a microphone and another speaking.',
    caption:
      'Three men engaged in conversation at CIIIC Annual Meet-up, with one man holding a microphone and another speaking.',
  },
  {
    src: '/images/82_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2202.jpeg',
    alt: 'A group of people in a conference room with a large window view of a cityscape and cranes in the background.',
    caption:
      'A group of people in a conference room with a large window view of a cityscape and cranes in the background.',
  },
  {
    src: '/images/83_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17265.jpeg',
    alt: 'Audience attentively listening at the CIIIC Annual Meet-up, with a prominent yellow CIIIC banner on the left.',
    caption:
      'Audience attentively listening at the CIIIC Annual Meet-up, with a prominent yellow CIIIC banner on the left.',
  },
  {
    src: '/images/84_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17276.jpeg',
    alt: 'Three panelists on stage addressing seated audience at CIIIC Annual Meet-up in a modern conference room.',
    caption:
      'Three panelists on stage addressing seated audience at CIIIC Annual Meet-up in a modern conference room.',
  },
  {
    src: '/images/85_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2237.jpeg',
    alt: 'A man in a striped shirt listens to an audience member speaking at a professional event. Other attendees are seated nearby.',
    caption:
      'Moderator Servaz van Berkum letting an audience member speak.',
  },
  {
    src: '/images/86_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2247.jpeg',
    alt: 'Five people on stage during a panel discussion at CIIIC Annual Meet-up, with one person speaking into a microphone.',
    caption:
      'Five people on stage during a panel discussion at CIIIC Annual Meet-up, with one person speaking into a microphone.',
  },
  {
    src: '/images/87_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17289.jpeg',
    alt: 'Panelists seated on stage during a discussion at the CIIIC Annual Meet-up, with an audience watching attentively.',
    caption:
      'Panelists seated on stage during a discussion at the CIIIC Annual Meet-up, with an audience watching attentively.',
  },
  {
    src: '/images/88_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2287.jpeg',
    alt: 'Four panelists seated on stage at CIIIC Annual Meet-up, with audience listening attentively. Large screen with abstract background.',
    caption:
      'Four panelists seated on stage at CIIIC Annual Meet-up, with audience listening attentively. Large screen with abstract background.',
  },
  {
    src: '/images/89_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2325.jpeg',
    alt: 'Four panelists seated on stage discussing at the CIIIC Annual Meet-up, audience members listen attentively in the foreground.',
    caption:
      'Four panelists seated on stage discussing at the CIIIC Annual Meet-up, audience members listen attentively in the foreground.',
  },
  {
    src: '/images/92_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2458.jpeg',
    alt: 'Man in a navy blazer poses confidently at CIIIC Annual Meet-up; bright, modern venue in background.',
    caption:
      'Man in a navy blazer poses confidently at CIIIC Annual Meet-up; bright, modern venue in background.',
  },
  {
    src: '/images/93_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2473.jpeg',
    alt: 'Two men engage in conversation on stage, one holding a microphone, with a floral arrangement on a table between them.',
    caption:
      'Two men engage in conversation on stage, one holding a microphone, with a floral arrangement on a table between them.',
  },
  {
    src: '/images/94_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2491.jpeg',
    alt: 'Man speaking into a microphone at CIIIC Annual Meet-up; large floral arrangement and blurred woman in background.',
    caption:
      'Man speaking into a microphone at CIIIC Annual Meet-up; large floral arrangement and blurred woman in background.',
  },
  {
    src: '/images/95_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17294.jpeg',
    alt: 'Audience seated facing a stage with two speakers and a presentation at a professional event.',
    caption: '',
  },
  {
    src: '/images/96_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_17318.jpeg',
    alt: 'Audience members sit and engage with speakers on a stage at the CIIIC Annual Meet-up, featuring a presentation screen and flowers.',
    caption:
      'Audience members sit and engage with speakers on a stage at the CIIIC Annual Meet-up, featuring a presentation screen and flowers.',
  },
  {
    src: '/images/97_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2526.jpeg',
    alt: 'Two men speaking at the CIIIC Annual Meet-up, one holding a microphone, standing in a professional setting with chairs.',
    caption:
      'Two men speaking at the CIIIC Annual Meet-up, one holding a microphone, standing in a professional setting with chairs.',
  },
  {
    src: '/images/98_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2565.jpeg',
    alt: 'A speaker at the CIIIC Annual Meet-up talks into a microphone, gesturing with one hand, while seated at a table.',
    caption:
      'A speaker at the CIIIC Annual Meet-up talks into a microphone, gesturing with one hand, while seated at a table.',
  },
  {
    src: '/images/99_20250526_CIIIC_Annual-Meet-Up_Photo-Ben-Houdijk_lr_2594.jpeg',
    alt: 'A person speaks into a microphone at a podium during the CIIIC Annual Meet-up, with an audience listening attentively.',
    caption:
      'A person speaks into a microphone at a podium during the CIIIC Annual Meet-up, with an audience listening attentively.',
  },
];

const DEFAULT_WIDTH = 1600;
const DEFAULT_HEIGHT = 1066;

export const images: Image[] = rawImages.map((image) => ({
  ...image,
  width: image.width ?? DEFAULT_WIDTH,
  height: image.height ?? DEFAULT_HEIGHT,
}));
