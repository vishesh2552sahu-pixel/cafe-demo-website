import { WHATSAPP_URL } from '../data/menuData';

export const buildWhatsAppOrderUrl = (itemName: string): string => {
  const message = encodeURIComponent(
    `Hi Khalifah, I would like to order ${itemName}.`
  );
  return `${WHATSAPP_URL}?text=${message}`;
};

export const buildWhatsAppGenericUrl = (): string => {
  const message = encodeURIComponent(
    'Hi Khalifah, I would like to place an order.'
  );
  return `${WHATSAPP_URL}?text=${message}`;
};
