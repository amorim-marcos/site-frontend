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

interface HeaderLimits {
  [key: string]: {
    [key: string]: number;
  };
}

export const FooterList = ({ title, items }: FooterListProps) => {
  const router = useRouter();
  const handleNavigation = (event: React.MouseEvent<HTMLDivElement>, link: string): void => {
    event.preventDefault();
  
    router.push(link);
  
    if (link.includes('#')) {
      const elementId = link.split('#')[1];
      const element = document.getElementById(elementId);
  
      if (element) {
        const headerLimits: HeaderLimits = {
          default: {
            '1536': 51,
            '1280': 40,
            '1024': 30,
            '768': 25,
            'default': 25,
          },
          'where-we-are': {
            '768': 50,
          },
          'trajectory': {
            '768': 30,
          },
          'environment': {
            '768': 50,
          },
          'our-people': {
            '768': 40,
          },
          'our-values': {
            '768': 40,
          },
          'production': {
            '768': 40,
          },
          'management': {
            '768': 40,
          },
          'supplier': {
            '768': 49,
          },
        };
  
        let headerLimit = headerLimits.default.default;
  
        const limitsForCurrentWidth = Object.keys(headerLimits.default)
          .reverse()
          .find((width) => window.innerWidth < Number(width));
          
        if (limitsForCurrentWidth) {
          headerLimit = headerLimits.default[limitsForCurrentWidth];
        }
  
        if (limitsForCurrentWidth && headerLimits[elementId] && headerLimits[elementId][limitsForCurrentWidth]) {
          headerLimit = headerLimits[elementId][limitsForCurrentWidth];
        }        
  
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - headerLimit,
          behavior: 'smooth',
        });
      }
    }
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
