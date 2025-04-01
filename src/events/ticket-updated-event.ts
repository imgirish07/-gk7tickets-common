import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: string;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
