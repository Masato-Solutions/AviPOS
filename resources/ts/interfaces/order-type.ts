export interface OrderType { 
    identifier: 'takeaway' | 'delivery' | 'dine-in' | 'pickmefoods' | 'ubereats'; 
    label: string;
    selected: boolean;
    icon: string;
};