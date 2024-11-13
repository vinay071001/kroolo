import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Switch,
  Avatar,
  IconButton,
  TextField,
} from "@mui/material";
import {
  Inbox,
  Message,
  Assignment,
  Stars,
  Chat,
  AccessTime,
  Layers,
  Flag,
  Description,
  Forum,
  Group,
  VideoCall,
  Home,
  Add,
  Person,
  MoreVert,
  Search,
  StarOutline,
} from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./dashboard.css";
import { Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Select } from "@mui/material";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 240, borderRight: "1px solid #e0e0e0", position: 'relative' }}>
        <Box
          sx={{ marginBottom: 2, textAlign: "left" }}
          className="header-wrap"
        >
          <div className="workspace-heading">Workspace</div>
          <div className="company-name-heading">
            <Home fontSize="small" sx={{ marginRight: 1 }} />
            Kroolo Space
          </div>
        </Box>
        <Divider />
        <List className="sidebar-wrap">
          {[
            { text: "Inbox", icon: <Inbox /> },
            { text: "Direct Messages", icon: <Message /> },
            { text: "My Tasks", icon: <Assignment /> },
            { text: "AI Agents", icon: <Stars /> },
            { text: "Chat with Anything", icon: <Chat /> },
            { text: "Track Time", icon: <AccessTime /> },
          ].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <div className="sidebar-tabs-heading">{item.text}</div>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ marginY: 1 }} />
        <List className="sidebar-wrap">
          {[
            { text: "Projects", icon: <Layers />, badge: "1" },
            { text: "Goals", icon: <Flag /> },
            { text: "Docs", icon: <Description /> },
            { text: "Channels", icon: <Forum /> },
            { text: "Teams", icon: <Group /> },
          ].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <div className="sidebar-tabs-heading">{item.text}</div>
              {item.badge && (
                <Chip label={item.badge} size="small" sx={{ marginLeft: 'auto' }} />
              )}
            </ListItem>
          ))}
          <ListItem button>
            <ListItemIcon>
              <VideoCall />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
            <Chip label="Soon" size="small" color="error" />
          </ListItem>
        </List>
        <Box sx={{ marginTop: 2 }} style={{
              position: 'absolute',
              bottom: '0',
              width: '100%'
        }}>
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Typography variant="body2">Starter Plan</Typography>
            <Button size="small" sx={{ padding: 0, textTransform: "none" }}>
              Upgrade Plan
            </Button>
          </Paper>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }} className="content-wrap">
        {/* Header */}
        <div className="profile-wrap">
          <Select
            value={"option1"}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="option1">Vinay Choudhary</MenuItem>
          </Select>
          <Switch defaultChecked />
          <Avatar>V</Avatar>
        </div>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{ justifyContent: "space-between" }}
            className="toolbar-wrap"
          >
            <div className="left-content-wrap">
              <Typography variant="h6" className="heading">
                Workspaces
                <Chip label={1} size="small" sx={{ marginLeft: 1 }} />
              </Typography>
              <Typography variant="body2" className="description">
                Workspace manages all projects, goals, tasks, docs, notes and
                conversations.
              </Typography>
            </div>
            <Button
              variant="contained"
              className="create-btn"
              startIcon={<Add />}
              sx={{
                background: "#7073fc",
                textTransform: "capitalize",
              }}
            >
              Create Workspace
            </Button>
          </Toolbar>
        </AppBar>

        {/* Content */}

        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={0}
          sx={{ width: "max-content", marginLeft: 2 }}
        >
          <Tab
            sx={{
              textTransform: "capitalize",
              color: "black",
            }}
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "black !important",
                }}
              >
                <FormatListBulletedIcon />
                <div>List</div>
              </div>
            }
          />
        </Tabs>

        <Box sx={{ background: "#f9fafb", textAlign: 'left' }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 0,
              paddingX: 2,
              paddingY: 1
            }}
          >
            <div
              className="table-heading"
            >
              <Home fontSize="small" sx={{ marginRight: 1 }} />
              Kroolo Space
              <div>
                {/* Icon button to trigger the menu */}
                <IconButton onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>

                {/* Dropdown menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <MenuItem onClick={handleClose}>Option 1</MenuItem>
                  <MenuItem onClick={handleClose}>Option 2</MenuItem>
                  <MenuItem onClick={handleClose}>Option 3</MenuItem>
                </Menu>
              </div>
            </div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <StarOutline />
              </IconButton>
              <Switch defaultChecked />
              <Typography>Public</Typography>
              <Avatar>V</Avatar>
              <Typography variant="body2">Vinay</Typography>
            </Box>
          </Box>

          {/* Search and Filter Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
              paddingX: 2,
              paddingBottom: 1
            }}
            style={{
              borderBottom: '1px solid #eaecf0'
            }}
          >
            <div>
              Projects
              <Chip label={1} size="small" sx={{ marginLeft: 1 }} />
            </div>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search project"
              InputProps={{
                startAdornment: <Search fontSize="small" />,
              }}
              sx={{ width: "300px" }}
            />
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Task Progress</TableCell>
                  <TableCell>Owner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Home fontSize="small" sx={{ marginRight: 1 }} />
                      Demo Project
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip label="On Track" color="success" size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip label="High" color="error" size="small" />
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        width: 100,
                        height: 8,
                        bgcolor: "#f0f0f0",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          width: "0%",
                          height: 8,
                          bgcolor: "primary.main",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ position: "absolute", right: '-30px', top: '-6px' }}
                      >
                        0%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                    <Avatar>V</Avatar>
                    <IconButton>
                      <div>
                        {/* Icon button to trigger the menu */}
                        <IconButton onClick={handleClick}>
                          <MoreHorizIcon />
                        </IconButton>

                        {/* Dropdown menu */}
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          anchorOrigin={{ vertical: "top", horizontal: "left" }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem onClick={handleClose}>Option 1</MenuItem>
                          <MenuItem onClick={handleClose}>Option 2</MenuItem>
                          <MenuItem onClick={handleClose}>Option 3</MenuItem>
                        </Menu>
                      </div>
                    </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Create Project Button */}
          <Button variant="text" startIcon={<Add />} sx={{ marginTop: 2, textTransform: 'capitalize', color: '#6a707c' }}>
            Create Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
