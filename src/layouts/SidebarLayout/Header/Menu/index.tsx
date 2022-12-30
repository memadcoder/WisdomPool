import { checkAuthentication } from '@/utility/checkAuthentication';
import { Box, List, ListItem, ListItemText, styled } from '@mui/material';
import { useRef, useState } from 'react';
import Link from 'src/components/Link';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Pool"
            />
          </ListItem>
          {isLoggedIn && (
            <>
              <ListItem
                classes={{ root: 'MuiListItem-indicators' }}
                button
                component={Link}
                href="/enrolled"
              >
                <ListItemText
                  primaryTypographyProps={{ noWrap: true }}
                  primary="Enrolled"
                />
              </ListItem>
              {/* <ListItem
                classes={{ root: 'MuiListItem-indicators' }}
                button
                component={Link}
                href="/mycourse"
              >
                <ListItemText
                  primaryTypographyProps={{ noWrap: true }}
                  primary="My Course"
                />
              </ListItem>
              <ListItem
                classes={{ root: 'MuiListItem-indicators' }}
                button
                component={Link}
                href="/fav"
              >
                <ListItemText
                  primaryTypographyProps={{ noWrap: true }}
                  primary="Favourites"
                />
              </ListItem>

              <ListItem
                classes={{ root: 'MuiListItem-indicators' }}
                button
                component={Link}
                href="/liked"
              >
                <ListItemText
                  primaryTypographyProps={{ noWrap: true }}
                  primary="Liked"
                />
              </ListItem> */}
            </>
          )}
        </List>
      </ListWrapper>
    </>
  );
}

export default HeaderMenu;
