export interface OrderType { 
    identifier: 'takeaway' | 'delivery' | 'dine-in' | 'pickmefood' | 'ubereats'; 
    label: string;
    selected: boolean;
    icon: string;
};