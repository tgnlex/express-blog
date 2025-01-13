interface Subscriber {
  id: number;
  email: string;
};

interface SubscriberMutation {
  id?: number;
  email?: string;
};

export type {Subscriber, SubscriberMutation};