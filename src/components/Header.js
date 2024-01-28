'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const { isOpen, onToggle } = useDisclosure()
  const navigate = useNavigate()
  console.log(localStorage.getItem('userId'), 'ueeeeeeeee')
  return (
    <Box className='bg=[#589F3C]'>
      <Flex className='py-0.5'
        bg={useColorModeValue('#589F3C')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'63px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <div className='flex items-center w-[58%]' onClick={() => {
            navigate('/')
          }}>

            {/* <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" color='white' width="66" height="68"><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5v15c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5Zm-5.5,19h-6v-1.5c0-.28,.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5v1.5Zm6-.5c0,.28-.22,.5-.5,.5h-2.5v-1.5c0-1.93-1.57-3.5-3.5-3.5h-5c-1.93,0-3.5,1.57-3.5,3.5v1.5H3.5c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v15ZM12,5c-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5-2.02-4.5-4.5-4.5Zm0,6c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z" /></svg> */}
            <img src="https://www.transparentpng.com/thumb/student/70xMbH-student-png.png"
              height={'125px'}
              width={'135px'}
              ></img>
            <h1 className='text-3xl text-white font-semibold ml-3'>
              Creative Haven
            </h1>
          </div>

          <div className='flex items-center mx-5 ml-8'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} target='_blank' href={'https://akshat157.github.io/meditate-app/'}>
              Meditation
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/media'}>
              Videos
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} target='_blank' href={'https://sudoku.js.org/#/?_k=y9fn8q'}>
              Games
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/pomodoro'}>
              Pomodoro
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/todo'}>
              Todo
            </Button>
          </div>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {(!localStorage.getItem('userId') || localStorage.getItem('userId') === 'undefined') && (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              color={'white'}
              as={'a'}
              fontSize={'xl'}
              fontWeight={500}
              variant={'link'}
              href={'/signup'}
            >
              SignUp
            </Button>
            <Button
              className='mr-4'
              color={'white'}
              as={'a'}
              fontSize={'xl'}
              fontWeight={500}
              variant={'link'}
              href={'/login'}
            >
              Login
            </Button>
          </Stack>
        )}

        {localStorage.getItem('userId') && localStorage.getItem('userId') !== 'undefined' && (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            className='mr-3'
            spacing={6}
          >
            <Button
              color={'white'}
              as={'a'}
              fontSize={'xl'}
              fontWeight={500}
              variant={'link'}
              onClick={() => {
                localStorage.setItem('userId', 'undefined');
                localStorage.clear();
                navigate('/login');
              }}
            >
              Log Out
            </Button>
          </Stack>
        )}


      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )

}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        className='text-white'
      >
        <Text fontWeight={600} color={'white'}>
          {label}
        </Text>
        {children && (
          <Icon color={'white'}
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [

]