import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TabItem, { TabItemProps } from '../Item/index';
import './styles.css';

export type FilterOption = 'all' | 'pending' | 'completed';

interface TabGroupProps {
    activeFilter: FilterOption;
    onFilterChange: (filterOption: FilterOption) => void;
}

type ExtendedTabItemProps = TabItemProps & {
    filterId: FilterOption
};

function TabGroup({ activeFilter, onFilterChange }: TabGroupProps) {
    const tabItems: ExtendedTabItemProps[] = [
        {
            filterId: 'all',
            LeadingIcon: <FormatAlignJustifyIcon />,
            label: 'All',
            ariaLabel: 'Show all tasks',
            active: activeFilter === 'all',
            onClick: () => {},
        },
        {
            filterId: 'pending',
            LeadingIcon: <QueryBuilderIcon />,
            label: 'Pending',
            ariaLabel: 'Show pending tasks',
            active: activeFilter === 'pending',
            onClick: () => {},
        },
        {
            filterId: 'completed',
            LeadingIcon: <TaskAltIcon />,
            label: 'Completed',
            ariaLabel: 'Show completed tasks',
            active: activeFilter === 'completed',
            onClick: () => {},
        },
    ]

    return (
        <ul className="tab-group-root">
            {tabItems.map((tabItem) => (
                <TabItem
                    key={tabItem.label}
                    LeadingIcon={tabItem.LeadingIcon}
                    label={tabItem.label}
                    ariaLabel={tabItem.ariaLabel}
                    active={tabItem.active}
                    onClick={() => onFilterChange(tabItem.filterId)}
                />
            ))}
        </ul>
    )
}

export default TabGroup;
