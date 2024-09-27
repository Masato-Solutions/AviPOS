export interface OrderType { 
    identifier: 'takeaway' | 'delivery' | 'dine-in' | 'ubereats' | 'pickmefoods'; 
    label: string;
    selected: boolean;
    icon: string;
};