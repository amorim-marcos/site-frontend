import { List, ListItem, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export type FooterListProps = {
  title: {
    href: string;
    title: string;
  };
  items: {
    href: string;
    title: string;
    empty?: boolean;
  }[];
};

export const FooterList = ({ title, items }: FooterListProps) => {
  const router = useRouter();

  const handleNavigation = (event: React.MouseEvent, link: string) => {
    event.preventDefault();
  
    router.push(link).then(() => {
      if (link.includes('#')) {
        const element = document.getElementById(link.split('#')[1]);
        if (element) {
          let headerLimit = 51;
          if (window.innerWidth < 1536) {
            headerLimit = 40;
          }
          if (window.innerWidth < 1280) {
            headerLimit = 30;
          }
          if (window.innerWidth < 1024) {
            headerLimit = 25;
          }
          if (window.innerWidth < 768) {
            headerLimit = 25;
          }
  
          requestAnimationFrame(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - headerLimit,
              behavior: 'smooth',
            });
          });
        }
      }
    });
  };
  

  return (
    <Box aria-label="footer-list">
      <List spacing="5">
        <ListItem cursor="pointer" onClick={(event) => handleNavigation(event, title.href)}>
          <Text
            _hover={{ color: 'green.600' }}
            variant={'header-menu' as any}
            fontSize={{
              base: '7px',
              sm: '8px',
              md: '10px',
              lg: '13px',
              xl: '14px',
            }}
            color="white.100"
          >
            {title.title}
          </Text>
        </ListItem>
        {items &&
          items.length &&
          items.map((i, j) =>
            i.empty ? (
              <Box key={j} height="20px"></Box>
            ) : (
              <ListItem
                cursor="pointer"
                key={j}
                onClick={(event) => handleNavigation(event, i.href)}
              >
                <Text
                  _hover={{ color: '#FFF' }}
                  variant={'tags' as any}
                  fontSize={{
                    base: '6px',
                    sm: '7px',
                    md: '9px',
                    lg: '12px',
                    xl: '13px',
                  }}
                  color="green.200"
                  fontWeight="600"
                >
                  {i.title}
                </Text>
              </ListItem>
            )
          )}
      </List>
    </Box>
  );
};
