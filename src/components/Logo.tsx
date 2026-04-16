interface Props {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
};

export default function Logo({ variant = 'dark', size = 'md' }: Props) {
  const baseColor =
    variant === 'light'
      ? 'text-white'
      : 'text-slate-900 dark:text-white';

  return (
    <div
      className={`font-extrabold tracking-tight leading-none select-none ${sizeMap[size]}`}
      aria-label="NGson"
    >
      <span className={baseColor}>NG</span>
      <span className="text-blue-500">son</span>
    </div>
  );
}
