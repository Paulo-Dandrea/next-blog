export type TPost = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
};

export interface PostHeaderProps {
  title: string;
  image: string;
}

export type PostContentProps = TPost & { content: string, isFeatured: boolean };

export type NotificationStatus = 'success' | 'error' | 'pending';

export type NotificationProps = {
  title: string;
  message: string;
  status: NotificationStatus;
};

export type TContactDetails = {
  name: string;
  email: string;
  message: string;
};
