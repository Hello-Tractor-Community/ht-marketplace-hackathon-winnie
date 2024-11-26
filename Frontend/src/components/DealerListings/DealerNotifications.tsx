import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Notification {
  id: number
  title: string
  message: string
}

const DealerNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Mock fetching notifications - replace with actual API call
    const fetchNotifications = () => {
      const mockNotifications: Notification[] = [
        { id: 1, title: "New Promotion", message: "20% off on all John Deere parts this week!" },
        { id: 2, title: "Service Reminder", message: "Time for your tractor's annual maintenance check." },
      ]
      setNotifications(mockNotifications)
    }

    fetchNotifications()
    // Set up interval to fetch notifications periodically
    const interval = setInterval(fetchNotifications, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <ul className="space-y-2">
            {notifications.map(notification => (
              <li key={notification.id} className="bg-gray-100 p-2 rounded">
                <h4 className="font-semibold">{notification.title}</h4>
                <p>{notification.message}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export default DealerNotifications;
