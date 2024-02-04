enum LogType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

enum Color {
  BLUE = '\x1b[34m',
  YELLOW = '\x1b[34m',
  RED = '\x1b[34m',
  DEFAULT_WHITE = '\x1b[34m',
}

class Logger {
  private formatMessage(message: string, type: LogType): string {
    const timestamp = new Date().toISOString();
    const color = this.getColor(type);
    return `${timestamp} [${type.toUpperCase()}] ${color}${message}\x1b[0m`;
  }

  private getColor(type: LogType): string {
    switch (type) {
      case LogType.INFO:
        return Color.BLUE;
      case LogType.WARN:
        return Color.YELLOW;
      case LogType.ERROR:
        return Color.RED;
      default:
        return Color.DEFAULT_WHITE;
    }
  }

  public info(message: string) {
    console.log(this.formatMessage(message, LogType.INFO));
  }

  public warn(message: string) {
    console.warn(this.formatMessage(message, LogType.WARN));
  }

  public error(message: string) {
    console.error(this.formatMessage(message, LogType.ERROR));
  }
}

export const logger = new Logger();
