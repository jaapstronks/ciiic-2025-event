import VideoPlayer from '../components/VideoPlayer';

interface Video {
  id: number;
  title: string;
  playbackId: string;
  description?: string;
  transcript?: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Ride The Immersive Wave',
    playbackId:
      '78Xt01600lBARM004ycsUYwdmIorcQaVN1bBUBm29QpShA',
    description:
      'The introduction video of CIIIC Annual Meet-Up 2025',
    transcript: `Hello? The third digital wave is in motion. Immersive. Expansive. Propelled by AI, it moves faster. Already reshaping how we engage with the world. It's not a trend, not a trick of light, but as a force for impact. This is not just about technology. It's about how we create meaning. To see history through new eyes. To train empathy through experience. To build not just tools, but trust. To guide this wave, the Netherlands launched CIIIC, the Creative Industries Immersive Impact Coalition, a national program to turn potential into practice. We invest in people, training skills, growing talent and sharing knowledge. We support makers and public organisations alike. And we build towards access for all so everyone can take part. CIIIC connects labs, studios, schools, ministries. Because only together can we make the impact that matters. From immersive classrooms to safer streets. From cultural storytelling to therapeutic environments. The third wave is global and it is moving fast. Dive in, sign up for our calls, build with us. Let's shape this wave together. `,
  },
  {
    id: 2,
    title: 'Frederike Manders',
    playbackId:
      'kST35I3024BbDwI6TaY2OQQfSAhFb7KEL4KjBC4q4Y9g',
    description:
      'Frederike Manders, Immersive Tech Program Manager at the Erasmus Centre for Data Analytics, reflects on the value of first-person experiences in immersive tech and the importance of long-term commitment.',
    transcript: `The great strength of iX is that the user has his or her first-person experience. And it's a spatial experience, it's a personal experience, and that's I think the biggest strength. I'm a photographer by trade and I did this project on what it's like to live with epilepsy in photographic sequences. It was very successful, but it was also not enough. And then I came across somebody who was working with VR, very early stages, first Oculus, etc. But it worked and that was the moment that I was convinced, yes, this is something that has great power and impact. CIIIC is a very good example of that we're going into the next phase. Because finally it's not only for the small developers, but it's reaching a much broader public. The nice thing about the community as it is in the Netherlands, there are hubs already and they have been there since the beginning. They really like working together. So CIIIC would benefit from tapping into that. It's already there. We all like working with IAX and there's this wow factor to it. But we also need to understand that it's here to stay and also think in long term. The key to success is time and persistence. We're in for the long run. `,
  },

  {
    id: 3,
    title: 'Roxy van de Langkruis',
    playbackId:
      'eRmShNhvCICvZnI02LYv1hktGEp7caYbecilmXogTPYc',
    description:
      'Roxy van de Langkruis, Project Manager Extended Reality at Politie Nederland, discusses how immersive tech can simulate real-life situations for police training and highlights the role of AI and integrated technologies in scaling its impact.',
    transcript: `What is the strength of IX? I think the strength of IX, I think from the police point of view, is getting content and experiences to our colleagues, situations that we can't create in real life. So I think the most important development within IX, maybe a word or a technology that's being used many, many times, I think it's AI and Gen AI. I think it gives a boost to IX for potential use and I think also potential scalability for the future. So the way the Dutch police is, I think, supporting or a part of the IX community is by joining different networking events. Or I think in this specific case, we are part of the Innovative Impact Challenge. So we are also part of the CEEIC and the growth fund to challenge the market and challenge the makers to come up with new innovative IX tools for the police. So that way we are part of the community by challenging the market. So I think the key to success for IX is the combination of technologies and integration of technologies such as AI, sensor technology. I think that's the key. `,
  },
  {
    id: 4,
    title: 'Michiel van der Aa',
    playbackId:
      'iVgRiHBx74Et9OeTKNiCgtCF9eDXsH3H88i008YCZ7U00',
    description:
      'Michiel van der Aa, Dutch composer of contemporary classical music, shares how XR enables new forms of music theatre by placing the audience at the center of the experience.',
    transcript: `Speaker 1
I'm super honoured and excited that we won last week in Cannes at the Film Festival. The jury was really attracted to the fact that it's an opera. It has music at its heart and the audience member is being taken through this poetic world by the six singers of vocal ensemble, Sha'Ella. So we worked about one and a half years on this project. One of the challenging things for me as a director was how to create digital performance that you can really connect to. And more than that, I wanted the performance to be aware of you as an audience member. So we used a combination of volumetric video, modeling, and we created these more poetic versions of the singers that look at you, follow your eyes, and are aware of you, the audience member in the space. For me as a maker, it's super interesting to have the audience member as the protagonist in the piece, to create a work that really centers around the audience member. and I think XR is really well suited for that. How do you scale a work like this? How do you scale VR or XR? That's, I think, a super difficult challenge. And for the last year we've been working on a new project called Hair Immersive Music Theatre. It's an online platform we are creating for Apple Vision Pro and PC VR, in which audience members at home can participate in music theatre works. So we're really aiming for this new type of audience with this project. The key to success for Mixed Reality, for me as a maker, is making the audience members central in the piece. To tell a different type of stories that I can't tell on an opera stage.`,
  },
  {
    id: 5,
    title: 'Jeremy Dalton',
    playbackId:
      '1YElTgKMsrS3dmF00rxtWSE02w4Pcp00HFmdMoZATk1nnw',
    description:
      'Jeremy Dalton, who leads the PwC Metaverse Technologies team, outlines how immersive tech is shifting toward long-term, purposeful applications that combine AI, user focus, and ethical considerations.',
    transcript: `My main message today at the CIIIC annual meetup is that we've moved away from short-term hype-fueled thinking in the IX industry, and we're now interested in more sustainable, long-term investments that add real value to both businesses and society. Immersive experiences can supercharge your business in a multitude of ways, from improving training to creating more efficient sales and marketing processes to allowing for closer collaboration between individuals all over the world. Immersive experiences can improve creativity and the creative industries in a lot of different ways. One is we're seeing completely new forms of art that we've never experienced before. And secondly, we can start to combine the physical and the digital world together in unprecedented ways, using the real world as a canvas instead of our 2D computer screens. In the field of immersive technologies, the biggest trends I'm seeing right now are: one, the integration of AI with IX to create even more powerful experiences than ever before, and two, the improvements in the hardware, creating smaller, lighter, more invisible form factors that will become more accepted by mainstream society. We have to take great care with immersive technologies because the technology is so powerful, it is capable of creating intense human emotions that need to be managed, as well as we have to worry about the data protection elements. When it comes to data, immersive experiences have to be taken care of because there are far greater forms of data that are potentially released with immersive experiences, and those data sets are far more intrusive than what is possible to collect on regular websites and 2D applications. My biggest advice for CIIIC is to consider the convergence of emerging technologies. So if we consider what virtual reality can do alone, what augmented reality can do alone, what AI can do alone, then that doesn't create the fullest picture for us and doesn't give us the greatest opportunity compared to what AI and IX could do together. Three things to promote immersive experiences in the most successful way. One is user-centric design. Always consider the friction of the end user and how you can make it as seamless and easy as comfortable as possible for them. Secondly, ensure you create high quality content that is relevant to their problem. And finally, make sure you are building immersive experiences with a clear, inarguable purpose. They're not a silver bullet and they shouldn't be used as a solution to every problem. But where you've identified that they are the correct solutions to a problem, you'll find a lot of value if you pursue them. There are significant challenges in the adoption of IX technologies, everything from physical challenges to psychological, sociological challenges. So keeping your user at the center of your experience as you explore this technology will be absolutely key to its success. `,
  },
  {
    id: 6,
    title: 'Abel Enklaar',
    playbackId:
      '2qyeKlHv1H1FZ702PefyqiCV4s01XXMhMzaGE61LNnxFA',
    description:
      'Abel Enklaar, Editor in Chief and Creative Director at VPRO Medialab, discusses how immersive tech enables new forms of storytelling and highlights the need for cross-sector collaboration rooted in public values.',
    transcript: `To me, the great strength of IX is bringing people closer to the story, thinking about agency, thinking about how do you tell a story as an experience. We have sort of the saying, "Seeing is believing, but experiencing is truly knowing," I think. I think the biggest development that I'm really excited about is not anything technical or anything to do with audience, but I think it has to do with makers. There's a much larger group of interdisciplinary creators now working within the field of IX, where it used to be very much lens based. You now see loads of social designers, researchers, theatre workers. I really think that interdisciplinarity will be the future of IX. I think in a way, makers are maybe more aligned with public values than they think. It's very much why do you create? Who do you create for? I just think they're not used to kind of like treating it as part of a funding core. I think public values are such an essential part for working with these new technologies. It's already an unfair playing field with big tech corporations basically providing the platforms. So with that, how can we create a public good? So for me, I'm really here to also bring a perspective of broadcasting, to not only bring in perspective from a maker, but bring in the perspective of broadcasters. Like how do you connect with an audience? How do you create for them? So currently at the VPRO Media Lab, we're really looking at the future of storytelling, future of media. We're researching ways that immersive technologies can aid research, it can bring you close to the action as a researcher, it can create more immersive environments for our audiences to be in. We're thinking about ways to create social communities that are online, that meet each other. And also, of course, AI is a very big topic. How will that transform? And then how do we curate, how do we tell stories in this fluid mediascape? The key to success for IX is cross-sector collaboration, finding ways in which IX can really make a meaningful difference in healthcare, in media, culture, education. Only then can we really find true solutions. `,
  },
  {
    id: 7,
    title: 'Danny van Zuijlen',
    playbackId:
      'RQebDQZ3dWxXJsh7KZeE87GDwijTIIe00T8GFUsGDexg',
    description:
      'Danny van Zuijlen, creative producer at Studio Immersief, talks about using immersive tech to explore complex stories across domains and emphasizes the need for shared language and collaboration across sectors.',
    transcript: `For me as a creative person, the great strength of IX is that you can travel in time telling different stories and through those stories talk with other dimensions. It's very important that multiple fields learn how to use it so that everybody from their own angle can tell different ways of stories. The most important value in my opinion of the IX field is that we learn how to solve future problems together. And as a creative you have a different angle or how you look to things. And for example at the police case I hope that future creatives can help solve problems in investigations and perhaps murders, you name it. I think it's very important that public values are part of this program because we as the creators have to learn the other language in collaborations. So how more we learn that language of other parties and companies, how more we can help to solve problems. For example, in the hospital they speak in other languages that we don't always understand as creative people. So you want to solve a problem, but if you don't understand each other in how to solve it, you have a problem. And I hope by this program we learn how to talk with each other. I hope to contribute that a young generation, new people, young people, people from school are feeling welcome to step in this new field. The key for success for e-access is that we really believe in the technology behind it and we keep our faith in it.`,
  },
];

export default function Videos() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="content">
          <h1>Videos</h1>
          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-item">
                <h2>{video.title}</h2>
                <VideoPlayer
                  playbackId={video.playbackId}
                  title={video.title}
                  description={video.description}
                  transcript={video.transcript}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
