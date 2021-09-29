package backend

type System interface {
	//WriteFile(filePath string, data []byte) error
	//ReadFile(filePath string) ([]byte, error)
	Executable() (string, error)
	Exit(exitCode int)
}
