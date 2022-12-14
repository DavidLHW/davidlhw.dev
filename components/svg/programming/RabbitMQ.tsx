import styled from "styled-components";

export const Wrapper = styled.svg(
  ({ $cursor }: { $cursor: string }) => `
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  display: block;
  cursor: ${$cursor};
  
  & path { transition: fill 0.25s }
`
);

export default ({
  color = "red",
  ...props
}: {
  color?: string;
} & Omit<JSX.IntrinsicElements["svg"], "ref" | "style">) => (
  <Wrapper
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    $cursor={!!props.onClick ? "pointer" : "auto"}
  >
    <path
      fill={color}
      d="M22.2 9.739h-7.09c-.567-.068-.999-.567-.999-1.155v-7.44A1.143 1.143 0 0 0 12.968 0h-2.481c-.635 0-1.145.515-1.145 1.145v7.518c-.031.567-.499 1.024-1.061 1.076H6.424A1.159 1.159 0 0 1 5.42 8.662V1.145C5.42.51 4.905 0 4.276 0H1.794C1.16 0 .65.515.65 1.145v21.71C.65 23.49 1.165 24 1.794 24h20.411c.635 0 1.144-.515 1.144-1.145V10.884A1.148 1.148 0 0 0 22.2 9.739zm-3.266 8.21c0 .635-.515 1.145-1.144 1.145h-2.481a1.144 1.144 0 0 1-1.144-1.145v-2.341c0-.635.515-1.145 1.144-1.145h2.481c.635 0 1.144.515 1.144 1.145v2.341z"
    />
  </Wrapper>
);
