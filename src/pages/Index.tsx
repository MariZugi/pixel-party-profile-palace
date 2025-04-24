
import { useState } from "react";
import { Music, Play, Youtube, MessageSquare, Users, Image, BookText, Mail, User, Heart, Star } from "lucide-react";
import { SparkleText, BlinkText, RainbowText, MarqueeText, GlitterButton, BouncingText } from "../components/Y2KAnimations";
import { Cursor, PixelHeart, PixelStar, VisitorCounter, EmoBox, GothicDivider, DarkGlowButton, GlitterOverlay } from "../components/PixelArt";
import Y2KBackground from "../components/Y2KBackground";

const Index = () => {
  const [status, setStatus] = useState("Feeling totally rad today!");
  const [comments, setComments] = useState([
    { name: "CoolKid98", message: "OMG ur page is sooo cool! <33", timestamp: "2 days ago" },
    { name: "XxDarkAngelxX", message: "love the new layout!! add me back!!", timestamp: "1 week ago" }
  ]);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([
        { name: "NewVisitor", message: commentText, timestamp: "Just now" },
        ...comments
      ]);
      setCommentText("");
    }
  };

  return (
    <div className="cursor-star min-h-screen bg-gradient-to-br from-y2k-darkPurple to-y2k-black py-8 px-4 relative">
      <Y2KBackground />
      {/* Main Container */}
      <div className="y2k-container bg-y2k-black pb-8 relative z-10">
        {/* Site Header */}
        <div className="y2k-header">
          <div className="text-xl"><SparkleText>CoolUserName's Space</SparkleText></div>
          <div className="text-xs flex items-center">Visitors: <VisitorCounter count={12345} /></div>
        </div>
        
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Profile Box */}
          <div className="md:col-span-1">
            <EmoBox>
              <div className="flex flex-col items-center">
                <div className="pixel-border mb-4 w-40 h-40 overflow-hidden rounded-full">
                  <div className="w-full h-full bg-gradient-to-r from-y2k-purple to-y2k-pink flex items-center justify-center text-white">
                    <User size={80} />
                  </div>
                </div>

                <h1 className="y2k-title text-xl mb-2 text-y2k-lime"><SparkleText>CoolUserName</SparkleText></h1>
                <div className="text-sm bg-y2k-lime text-y2k-black px-3 py-1 rounded-full mb-3">
                  <BlinkText>Online Now!</BlinkText>
                </div>
                
                <div className="w-full bg-y2k-darkPurple p-3 rounded-lg mb-3 border border-y2k-purple">
                  <p className="font-bold text-y2k-pink mb-1">Status:</p>
                  <p className="italic text-white">{status}</p>
                </div>
                
                <div className="w-full bg-y2k-darkPurple p-3 rounded-lg border border-y2k-pink">
                  <p className="font-bold text-y2k-pink mb-1">Quote:</p>
                  <p className="italic"><RainbowText>"Be yourself, everyone else is already taken!"</RainbowText></p>
                </div>
              </div>
            </EmoBox>
            
            {/* Friend Space */}
            <div className="y2k-box mt-4 text-white">
              <h2 className="y2k-title text-lg mb-4 text-y2k-lime">My Top Friends <Users className="inline ml-2" size={16} /></h2>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((friend) => (
                  <div key={friend} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-y2k-teal rounded-full mb-1 flex items-center justify-center text-y2k-black">
                      <User size={24} />
                    </div>
                    <p className="text-xs">Friend {friend}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:col-span-2">
            {/* Navigation Menu */}
            <div className="flex overflow-x-auto mb-4 border-b-4 border-y2k-purple">
              <div className="y2k-nav-tab active">
                <User size={12} className="inline mr-1" /> About Me
              </div>
              <div className="y2k-nav-tab">
                <Image size={12} className="inline mr-1" /> Photos
              </div>
              <div className="y2k-nav-tab">
                <Users size={12} className="inline mr-1" /> Friends
              </div>
              <div className="y2k-nav-tab">
                <BookText size={12} className="inline mr-1" /> Blog
              </div>
              <div className="y2k-nav-tab">
                <Mail size={12} className="inline mr-1" /> Contact
              </div>
            </div>
            
            {/* Personal Bulletin Board */}
            <EmoBox>
              <h2 className="y2k-title text-lg mb-4 text-y2k-lime">My Bulletin Board <PixelStar /> <Star className="inline ml-2 text-y2k-lime" size={16} /></h2>
              
              <div className="mb-6 pb-6 border-b-2 border-dotted border-y2k-purple">
                <div className="font-bold text-y2k-purple">April 16, 2025</div>
                <h3 className="text-lg font-bold mb-2"><RainbowText>Check out my new profile design!</RainbowText></h3>
                <p className="text-white">
                  OMG you guys! I finally updated my profile with this totally rad Y2K design! 
                  What do you think? Leave me a comment in my guestbook! 
                  <BlinkText><span className="ml-2 font-bold">♥♥♥</span></BlinkText>
                </p>
                <div className="mt-2 text-y2k-pink">
                  <PixelHeart /> <Heart className="inline mr-1" size={14} /> 24 friends like this
                </div>
              </div>
              
              <GothicDivider />
              
              <div className="mb-6 pb-6 border-b-2 border-dotted border-y2k-purple">
                <div className="font-bold text-y2k-purple">April 10, 2025</div>
                <h3 className="text-lg font-bold mb-2 text-y2k-lime">Just hanging out</h3>
                <p className="text-white">
                  Went to the mall yesterday with the squad. Got some cool new clothes and 
                  had lunch at the food court. Can't wait for the weekend party!
                </p>
                <div className="mt-2 text-y2k-pink">
                  <Heart className="inline mr-1" size={14} /> 18 friends like this
                </div>
              </div>
              
              <GothicDivider />
              
              <div>
                <div className="font-bold text-y2k-purple">April 5, 2025</div>
                <h3 className="text-lg font-bold mb-2 text-y2k-lime">My new favorite song!</h3>
                <p className="text-white">
                  Can't stop listening to this track! Check it out on my playlist below.
                  Let me know what you think. Should I add more to my collection?
                </p>
                <div className="mt-2 text-y2k-pink">
                  <Heart className="inline mr-1" size={14} /> 32 friends like this
                </div>
              </div>
            </EmoBox>
            
            {/* Playlist Section */}
            <div className="y2k-box mt-4 text-white">
              <h2 className="y2k-title text-lg mb-4 sparkle text-y2k-lime">My Playlist <Music className="inline ml-2" size={16} /></h2>
              <div className="media-player">
                <div className="text-white font-bold mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Play size={16} className="mr-2" />
                    NOW PLAYING
                  </div>
                  <div className="flex space-x-2">
                    <Youtube size={18} />
                    <Music size={18} />
                  </div>
                </div>
                
                <div className="bg-y2k-black rounded-lg p-3 text-white mb-3">
                  <div className="text-y2k-lime font-bold">Track: "Retro Vibes"</div>
                  <div className="text-xs">Artist: Y2K Dreams</div>
                </div>
                
                <div className="bg-y2k-teal/50 p-2 rounded-lg">
                  <div className="h-2 bg-y2k-black rounded-full overflow-hidden">
                    <div className="h-full bg-y2k-pink w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-xs text-white mt-1">
                    <span>1:24</span>
                    <span>4:32</span>
                  </div>
                </div>
                
                <div className="media-controls">
                  <button className="media-button">◀◀</button>
                  <button className="media-button">▶</button>
                  <button className="media-button">■</button>
                  <button className="media-button">▶▶</button>
                </div>
              </div>
              
              <div className="mt-3 text-center text-sm italic">
                "This song totally represents my vibe right now!"
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Guestbook/Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <EmoBox>
              <h2 className="y2k-title text-lg mb-3 text-y2k-lime">Custom HTML Zone</h2>
              <div className="bg-y2k-darkPurple p-3 rounded-lg text-center border border-y2k-purple">
                <div className="mb-2 text-y2k-pink font-bold">My Mood Today:</div>
                <BouncingText text="😊😎🥳💯✨" />
                <div className="mt-2">
                  <RainbowText>TOTALLY AWESOME!</RainbowText>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="border-4 border-y2k-lime rounded-lg overflow-hidden">
                  <div className="bg-y2k-purple text-white font-bold py-1 px-3 text-center">
                    *~*~* Glitter Graphics *~*~*
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-2 bg-y2k-black">
                    {[1, 2, 3, 4].map((img) => (
                      <div key={img} className="h-20 bg-gradient-to-r from-y2k-pink to-y2k-purple flex items-center justify-center text-white font-bold text-xs">
                        GLITTER GIF {img}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </EmoBox>
            
            <div className="y2k-box mt-4 text-white">
              <div className="pixel-border mb-2 p-3 text-center bg-y2k-black">
                <div className="rainbow-text font-bold">
                  VISITOR COUNTER
                </div>
                <div className="bg-y2k-black text-y2k-lime font-mono font-bold mt-1 p-1 border border-y2k-purple">
                  12,345
                </div>
              </div>
              
              <div className="text-center">
                <div className="blink-text font-bold text-y2k-lime">
                  ★☆★ Thanks for visiting! ★☆★
                </div>
              </div>
            </div>
          </div>
          
          {/* Guestbook */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="y2k-box">
              <h2 className="y2k-title text-lg mb-3 flex items-center text-y2k-lime">
                <MessageSquare className="mr-2" size={18} /> My Guestbook
              </h2>
              
              <form onSubmit={handleAddComment} className="mb-4">
                <div className="mb-2">
                  <input
                    type="text"
                    className="y2k-input w-full"
                    placeholder="Leave a message..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </div>
                <DarkGlowButton onClick={handleAddComment}>
                  Sign Guestbook!
                </DarkGlowButton>
              </form>
              
              <div className="y2k-guestbook">
                {comments.map((comment, index) => (
                  <div key={index} className="mb-3 pb-3 border-b border-dotted border-y2k-purple last:border-0">
                    <div className="flex justify-between mb-1">
                      <div className="font-bold text-y2k-pink">{comment.name}</div>
                      <div className="text-xs text-gray-400">{comment.timestamp}</div>
                    </div>
                    <div>{comment.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer with Marquee */}
        <div className="mt-8 border-t-4 border-y2k-purple pt-4 px-6">
          <div className="bg-y2k-darkPurple rounded-lg px-4 py-2 overflow-hidden">
            <MarqueeText>
              <span className="font-bold text-y2k-lime">★ Thanks for visiting my profile! ★ Add me to your friends list! ★ Comment on my posts! ★ Check back soon for updates! ★</span>
            </MarqueeText>
          </div>
          
          <div className="flex justify-center mt-4 space-x-4">
            {["🏠", "📷", "👥", "📝", "📧"].map((icon, i) => (
              <div key={i} className="text-2xl">{icon}</div>
            ))}
          </div>
          
          <div className="text-center mt-4 text-xs">
            <div className="font-bold"><RainbowText>CoolUserName's Space © 2025</RainbowText></div>
            <div className="mt-1 text-gray-400">
              Best viewed with Internet Explorer 6.0 at 1024x768 resolution
              <div className="mt-2">
                <BlinkText>
                  <span className="font-bold text-y2k-pink">Under Construction!</span>
                </BlinkText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
