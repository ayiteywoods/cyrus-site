'use client';
import * as HeroIcons from '@heroicons/react/24/outline';

interface DynamicHeroIconProps {
  icon: string;
  className?: string;
}

const DynamicHeroIcon = ({ icon, className = 'h-6 w-6' }: DynamicHeroIconProps) => {
  const IconComponent = HeroIcons[icon as keyof typeof HeroIcons];
  
  if (!IconComponent) {
    return <HeroIcons.QuestionMarkCircleIcon className={className} />;
  }

  return <IconComponent className={className} />;
};

export default DynamicHeroIcon;