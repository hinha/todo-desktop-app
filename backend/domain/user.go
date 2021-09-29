package domain

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID        string     `json:"id" gorm:"type:varchar(50);primaryKey"`
	FirstName string     `json:"firstName" gorm:"type:varchar(50);not null"`
	LastName  string     `json:"LastName" gorm:"type:varchar(50);not null"`
	Email     string     `json:"email" gorm:"type:text;not null"`
	Password  string     `json:"password" gorm:"type:text;not null"`
	Status    bool       `json:"status" gorm:"default:false"`
	Notebook  []Notebook `gorm:"foreignKey:UserID"`
}
