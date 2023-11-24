export default function UserWorkspace() {
    return (
        // user workspace will be divided into two section 
        // Left pane 
        // right workspace
        <>
            <div className="d-inline-flex flex-row p-2 column-gap-2">
                {/* this is left pane div */}
                <div classname="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                    <ul classname="nav nav-pills flex-column mb-auto">
                        <li classname="nav-item">
                            <a href="#" classname="nav-link active" aria-current="page">
                                <svg classname="bi pe-none me-2" width="16" height="16"><use></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" classname="nav-link link-body-emphasis">
                                <svg classname="bi pe-none me-2" width="16" height="16"><use></use></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" classname="nav-link link-body-emphasis">
                                <svg classname="bi pe-none me-2" width="16" height="16"><use></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" classname="nav-link link-body-emphasis">
                                <svg classname="bi pe-none me-2" width="16" height="16"><use></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" classname="nav-link link-body-emphasis">
                                <svg classname="bi pe-none me-2" width="16" height="16"><use></use></svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div classname="dropdown">
                        <a classname="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" classname="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul classname="dropdown-menu text-small shadow">
                            <li><a classname="dropdown-item">New project...</a></li>
                            <li><a classname="dropdown-item">Settings</a></li>
                            <li><a classname="dropdown-item">Profile</a></li>
                            <li><hr classname="dropdown-divider" /></li>
                            <li><a classname="dropdown-item">Sign out</a></li>
                        </ul>
                    </div>
                </div>

                {/* this is workspace area here */}
                <div className="d-flex flex-column shadow">
                    <h1>workspace area here</h1>
                    <div classname="p-2">Flex item 1</div>
                    <div classname="p-2">Flex item 2</div>
                    <div classname="p-2">Flex item 3</div>
                </div>
            </div>
        </>
    )
}