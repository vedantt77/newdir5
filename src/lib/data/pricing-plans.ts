import { BadgeProps } from "@/components/ui/badge";

export interface PricingPlan {
  name: string;
  price: string | number;
  period: 'monthly' | 'annually' | 'weekly';
  badge?: {
    text: string;
    variant: BadgeProps['variant'];
  };
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  paypalPlanId?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Boost', // Edit name
    price: 20, // Edit price
    period: 'weekly', // Change period: 'weekly', 'monthly', or 'annually'
    badge: { 
      text: 'Most Popular', // Edit badge text
      variant: 'default' // Change variant: 'default', 'secondary', or 'outline'
    },
    features: [ // Edit features list
      'Featured listing for 7 days',
      'Verified checkmark',
      'Priority support' // Add more features
    ],
    buttonText: 'Get Started', // Edit button text
    paypalPlanId: 'basic-boost' // PayPal plan ID for payments
  },
  {
    name: 'Pro Boost',
    price: 80,
    period: 'monthly',
    badge: { 
      text: 'Best Value',
      variant: 'secondary'
    },
    features: [
      'Featured listing for 30 days',
      'Priority placement',
      '1x Newsletter mention',
      'verified checkmark',
      
    ],
    highlighted: true,
    buttonText: 'Upgrade to Pro',
    paypalPlanId: 'pro-boost'
  },
  {
    name: 'Custom',
    price: 'Custom',
    period: 'annually',
    badge: {
      text: 'Enterprise',
      variant: 'outline'
    },
    features: [
      'All Pro features',
      'Custom promotion plan',
      'Dedicated support',
      'Custom integrations',
      'SLA agreement'
    ],
    buttonText: 'Contact Sales'
  }
];