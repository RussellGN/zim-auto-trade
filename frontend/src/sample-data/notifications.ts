import { NotificationInterface } from "@/lib/interfaces";

export const sampleNotifications: NotificationInterface[] = [
  {
    id: "1",
    type: "new_lead",
    title: "New Lead Generated",
    body: "A user is interested in the 2020 Toyota Hilux you listed. They have requested more details about the vehicle and would like to schedule a test drive at the earliest convenience. Please respond as soon as possible to avoid losing the lead.",
    timestamp: "2025-02-05T10:30:00Z",
    read: false,
    relatedCarSlug: "car1234",
  },
  {
    id: "2",
    type: "price_update",
    title: "Price Update Alert",
    body: "The price of the 2019 Ford Ranger has been updated by the owner. Ensure you review the change and adjust your offers accordingly. Keeping track of price changes helps maintain competitiveness in the market and offers better deals to potential buyers.",
    timestamp: "2025-02-05T09:15:00Z",
    read: true,
    relatedCarSlug: "car5678",
  },
  {
    id: "3",
    type: "trade_offer",
    title: "New Trade Offer",
    body: "You received a trade-in offer for the 2021 Nissan Navara. The buyer is interested in negotiating a deal that could be mutually beneficial. Review the details and respond quickly to close the trade successfully.",
    timestamp: "2025-02-05T08:45:00Z",
    read: false,
    relatedCarSlug: "car9101",
    senderId: "user789",
  },
  {
    id: "4",
    type: "message",
    title: "New Message from Buyer",
    body: "John Doe: Is the 2018 BMW X5 still available? I am highly interested and would like to discuss further details, including pricing, financing options, and potential test drive schedules. Please let me know your availability to connect.",
    timestamp: "2025-02-05T07:30:00Z",
    read: false,
    senderId: "user456",
  },
  {
    id: "5",
    type: "system",
    title: "System Maintenance Scheduled",
    body: "Our platform will undergo maintenance on February 10th at 2 AM UTC. During this period, some features may be temporarily unavailable. We appreciate your patience and recommend completing any urgent tasks before the maintenance begins.",
    timestamp: "2025-02-04T22:00:00Z",
    read: true,
  },
];
