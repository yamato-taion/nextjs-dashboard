import React from 'react'

type CardType = {
  title: string
  description: string
}

const Card = ({ title, description }: CardType) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-white p-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl">{description}</p>
      <p className="absolute bottom-0 text-sm font-thin">
        リアルタイムで更新中
      </p>
    </div>
  )
}

export default Card
