package domain

import (
	"gorm.io/gorm"
	"time"
)

type User struct {
	gorm.Model
	ID        string     `json:"id" gorm:"type:varchar(50);primaryKey"`
	FirstName string     `json:"firstName" gorm:"type:varchar(50);not null"`
	LastName  string     `json:"lastName" gorm:"type:varchar(50);not null"`
	Email     string     `json:"email" gorm:"type:text;not null"`
	Password  string     `json:"password" gorm:"type:text;not null"`
	Status    bool       `json:"status" gorm:"default:false"`
	EmailVerified bool `json:"emailVerified" gorm:"default:false"`
	EmailCreateVerified time.Time `json:"-"`
	Notebook  []Notebook `gorm:"foreignKey:UserID"`
}
