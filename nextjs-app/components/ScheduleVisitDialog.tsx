
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Calendar } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// interface ScheduleVisitDialogProps {
//   children: React.ReactNode;
// }

// const ScheduleVisitDialog = ({ children }: ScheduleVisitDialogProps) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     preferredDate: "",
//     preferredTime: "",
//     message: ""
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Visit scheduled:", formData);
    
//     toast({
//       title: "Visit Scheduled!",
//       description: "We'll contact you soon to confirm your visit details.",
//     });
    
//     setIsOpen(false);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       preferredDate: "",
//       preferredTime: "",
//       message: ""
//     });
//   };

//   const handleGetDirections = () => {
//     const address = "Sector 63, Noida - 201301";
//     const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
//     window.open(googleMapsUrl, '_blank');
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         {children}
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Calendar className="w-5 h-5" />
//             Schedule Your Visit
//           </DialogTitle>
//           <DialogDescription>
//             Book a visit to our Noida center and experience our facilities firsthand.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="name">Full Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="phone">Phone Number *</Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
          
//           <div>
//             <Label htmlFor="email">Email Address *</Label>
//             <Input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="date">Preferred Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={formData.preferredDate}
//                 onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
//                 min={new Date().toISOString().split('T')[0]}
//               />
//             </div>
//             <div>
//               <Label htmlFor="time">Preferred Time</Label>
//               <Input
//                 id="time"
//                 type="time"
//                 value={formData.preferredTime}
//                 onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
//               />
//             </div>
//           </div>

//           <div>
//             <Label htmlFor="message">Message (Optional)</Label>
//             <Textarea
//               id="message"
//               placeholder="Any specific requirements or questions..."
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               rows={3}
//             />
//           </div>

//           {/* Location & Directions */}
//           <div className="bg-blue-50 p-4 rounded-lg space-y-3">
//             <h4 className="font-semibold text-gray-900">Visit Our Center</h4>
//             <p className="text-sm text-gray-600">
//               📍 Sector 63, Noida - 201301<br/>
//               🕒 Mon-Sat: 9:00 AM - 9:00 PM<br/>
//               📞 Contact: +91-XXXXXXXXXX
//             </p>
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={handleGetDirections}
//               className="w-full"
//             >
//               Get Directions on Google Maps
//             </Button>
//           </div>

//           <div className="flex gap-3 pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => setIsOpen(false)}
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//             <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
//               Schedule Visit
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ScheduleVisitDialog;
