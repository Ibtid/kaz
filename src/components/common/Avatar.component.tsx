const AvatarTick = (props: any) => {
    const { x, y, payload } = props;
    const size = 40; // Avatar size
    const marginRight = 30; // Space to the right
    const safeId = `clip-${btoa(payload.value)}`; // Unique ID for clipPath
  
    return (
      <svg
        x={x - size / 2 - marginRight}
        y={y - size / 2}
        width={size}
        height={size}
      >
        <defs>
          <clipPath id={safeId}>
            <circle cx={size / 2} cy={size / 2} r={size / 2} />
          </clipPath>
        </defs>
        <image
          href={payload.value}
          width={size}
          height={size}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${safeId})`}
        />
      </svg>
    );
  };

  export default AvatarTick;