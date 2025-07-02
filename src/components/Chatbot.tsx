
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with course information and answer your questions. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const faqQuestions = [
    "What courses do you offer?",
    "How long are the courses?",
    "Do you provide certificates?",
    "What is the placement support?",
    "Are there online classes?",
    "What are the fees?"
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("course") || lowerMessage.includes("what")) {
      return "We offer 6 comprehensive digital marketing courses: SEO Mastery, Social Media Marketing, Google Ads & PPC, Email Marketing, Analytics & Data Insights, and Content Strategy. Each course is designed with hands-on projects and industry mentorship.";
    }
    
    if (lowerMessage.includes("duration") || lowerMessage.includes("long")) {
      return "Our courses range from 4-10 weeks depending on the specialization. SEO Mastery is 8 weeks, Social Media Marketing is 6 weeks, and Google Ads is 10 weeks. All courses include flexible timing options.";
    }
    
    if (lowerMessage.includes("certificate") || lowerMessage.includes("certification")) {
      return "Yes! You'll receive industry-recognized certificates upon successful completion of each course. Our certificates are valued by top companies and can boost your career prospects.";
    }
    
    if (lowerMessage.includes("placement") || lowerMessage.includes("job")) {
      return "We provide comprehensive placement support including resume building, interview preparation, and direct connections with 50+ partner companies. We have a 90% placement rate with dedicated career counselors.";
    }
    
    if (lowerMessage.includes("online") || lowerMessage.includes("offline")) {
      return "We offer both online and offline training options! You can choose live online classes, weekend batches, or attend our physical centers in Mumbai, Delhi, and Bangalore.";
    }
    
    if (lowerMessage.includes("fee") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Course fees range from ₹15,000 to ₹30,000 depending on the specialization. We offer flexible payment options and EMI facilities. Contact us for detailed pricing and current offers.";
    }
    
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return "You can reach us at:\n📞 +91 9876543210\n✉️ info@digitalacademy.com\nOr visit our centers in Mumbai, Delhi, and Bangalore. Our team is available 9 AM to 7 PM, Monday to Saturday.";
    }
    
    return "Thank you for your question! For detailed information about our courses, fees, and enrollment process, I'd recommend speaking with our admissions counselor. You can call us at +91 9876543210 or visit our courses page for more details.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-50 shadow-2xl">
          <Card className="h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                Digital Academy Assistant
              </CardTitle>
              <p className="text-blue-100 text-sm">Ask me about courses, fees, and enrollment!</p>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.sender === 'bot' ? (
                          <Bot className="w-4 h-4" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                        <span className="text-xs opacity-75">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-4 border-t bg-gray-50">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {faqQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 text-xs"
                      onClick={() => handleSendMessage(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
