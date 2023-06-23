import { Text, Flex, Box } from '@chakra-ui/react';
import Arrow from '@components/Arrow';
import ArrowIcon from '@components/Icons/ArrowIcon';
import { useRouter } from 'next/router';
type SubItem = {
  title?: string;
  href?: string;
  arrow?: boolean;
};

type HeaderMenuSubItemProps = {
  title?: string;
  href?: string;
  subItems?: SubItem[];
  onClick?: () => void;
};

export const HeaderMenuSubItem: React.FC<HeaderMenuSubItemProps> = ({
  title = 'Default Title',
  href = '/',
  subItems,
  onClick,
}) => {
  const router = useRouter();

  const handleNavigation = (event: React.MouseEvent, link: string) => {
    event.preventDefault();

    router.push(link);

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

        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - headerLimit,
          behavior: 'smooth',
        });
      }
    }
  };

  return (

    <Flex onClick={onClick} flexDir="column">
      <Flex
        onClick={(event) => handleNavigation(event, href)}
        paddingLeft={{
          base: '15px',
          md: '12px',
          lg: '15px',
          xl: '20px',
        }}
        cursor="pointer"
        _hover={{ md: { bg: subItems ? 'green.800' : '#79B928' } }}
        alignItems="center"
        minH={{
          base: '60px',
          md: '30px',
          lg: '35px',
          xl: '40px',
        }}
        w={{ base: '100%', md: '100%' }}
        bg={{ base: 'green.700', md: 'green.800' }}
        borderBottom={{ base: '2px solid', md: 'none' }}
        borderBottomColor={{ base: 'green.800', md: 'none' }}
        paddingY="10px"
      >
        <Text
          fontSize={{
            base: '14px',
            md: '8.3px',
            lg: '10px',
            xl: '13px',
          }}
          color="white.100"
          variant={'header-menu' as any}
          maxW="95%"
        >
          {title || 'Component text'}
        </Text>
        <Flex flexDir="column"></Flex>
      </Flex>
      <Box>
        {subItems?.map((i, j) => {
          return (
            <Flex
              key={j}
              onClick={(event) => handleNavigation(event, i.href || '/')}
              paddingLeft={{
                base: '15px',
                md: '12px',
                lg: '15px',
                xl: '20px',
              }}
              paddingY="10px"
              cursor="pointer"
              _hover={{ bg: '#79B928' }}
              alignItems="center"
              minH={{
                base: '40px',
                md: '30px',
                lg: '35px',
                xl: '40px',
              }}
              w="100%"
              bg="green.700"
            >
              {i.arrow && (
                <ArrowIcon
                  stroke="#CCD3CA"
                 w={{
                    base: '8px',
                    md: '5px',
                    lg: '6px',
                    xl: '8px',
                  }}
                />
              )}
              <Text
                ml={i.arrow ? '10px' : '0'}
                fontSize={{
                  base: '14px',
                  md: '8.3px',
                  lg: '10px',
                  xl: '13px',
                }}
                color="white.100"
                variant={'header-menu-small' as any}
                maxW="95%"
              >
                {i.title}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
};
